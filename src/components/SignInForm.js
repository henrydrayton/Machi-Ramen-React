import React, {useState} from 'react';
import {signIn} from '../api/auth'
import {useGlobalState} from '../utils/stateContext'

function SignInForm(history) {
	const {dispatch} = useGlobalState()
    
    const initialFormState = {
		email: '',
		password: ''
	}
	const [formState, setFormState] = useState(initialFormState)
    
    function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}

    function handleSubmit(event) {
        event.preventDefault();
        signIn(formState)
        .then((resp) => {
            if (resp.ok) {
                const token = resp.headers.get("Authorization");
                localStorage.setItem('session_token', token);
                dispatch({type: 'setToken', data: token})
                return resp.json();
                } else {
                throw new Error(resp);
                }
            })
        .then((json) => {
            const email = json.data.email;
            localStorage.setItem('email', email);
            dispatch({type: 'setLoggedInUser', data: email});
        } )
        .catch((err) => console.error(err));
    }

    return (
        <form onSubmit={handleSubmit} >
            <fieldset>
                <label>Email</label>
                <input name='email' type='text' value={formState.email} onChange={handleChange}/>
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input name='password' type='password' value={formState.password} onChange={handleChange}/>
            </fieldset>
            <input type='submit' value='Sign In' />
        </form>
    );
}

export default SignInForm;