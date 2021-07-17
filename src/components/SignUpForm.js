import React, { useState } from 'react';
import {signUp} from '../api/auth'
import {useGlobalState} from '../utils/stateContext'

function SignUpForm(history) {
	const {dispatch} = useGlobalState()
    
    const initialFormState = {
		email: '',
		password: '',
        first_name: ''
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
        signUp(formState)
        .then((resp) => {
            if (resp.ok) {
                const token = resp.headers.get("Authorization");
                console.log(token);
                localStorage.setItem('session_token', token);
                dispatch({type: 'setToken', data: token})
                return resp.json();
                } else {
                throw new Error(resp);
                }
            })
        .then((json) => {
            console.dir(json);
            const email = json.data.email;
            console.log(email);
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
            <fieldset>
                <label>First Name</label>
                <input name='first_name' type='first_name' value={formState.first_name} onChange={handleChange}/>
            </fieldset>
            <input type='submit' value='Sign Up' />
        </form>
    );
}

export default SignUpForm;
