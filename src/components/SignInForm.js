import React, {useState} from 'react';
import {signIn} from '../api/auth';
import {useGlobalState} from '../utils/stateContext';
import { useHistory } from 'react-router-dom';
import './SignInForm.css'

// The SignInForm function sets the initialFormState of email and password to ''.

function SignInForm() {
	const {dispatch} = useGlobalState()
    let history = useHistory()

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
                history.push(`/home`)
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
        <div className="Form">
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                    Machi Ramen Login
                </div>
                <div className="mb-4">
                    <fieldset>
                        <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username" >Email</label>
                        <input name='email' type='text' value={formState.email} onChange={handleChange} className="shadow 
                            appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            v-model="form.email"
                            type="email"
                            required
                            autoFocus
                            placeholder="Email"/>
                    </fieldset>
                </div>
                <div className="mb-6">
                    <fieldset>
                        <label  className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password" >Password</label>
                        <input name='password' type='password' value={formState.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="form.password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            autoComplete="current-password" />
                    </fieldset>
                    <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
                </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 Machi Ramen. All rights reserved.
                </p>
            </div>
        </div>
        </div>
    );
}

export default SignInForm;
