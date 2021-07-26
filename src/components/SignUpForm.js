import React, { useState } from 'react';
import {signUp, setTimeLocalStorage} from '../api/auth'
import {useGlobalState} from '../utils/stateContext'
import {useHistory} from 'react-router'
import './SignInForm.css'

// Render sign up form and handle user sign up
function SignUpForm() {
	const {dispatch} = useGlobalState()

    // useHistory is used for redirection after user logout
    let history = useHistory()
    
    const initialFormState = {
		email: '',
		password: '',
        first_name: ''
	}
	const [formState, setFormState] = useState(initialFormState)
        
    // set flash to show error message
    const [flash, setFlash] = useState('');

    // handle input value change
    function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}

    // When user click submit, the callback function signUp will be called to send input data to server.
    // it returns a Promise, so we need to catch the response.
    function handleSubmit(event) {
        event.preventDefault();
        signUp(formState)
        .then((resp) => {
            if (resp.ok) {
                history.push(`/home`)
                const token = resp.headers.get("Authorization");
                localStorage.setItem('session_token', token);
                setTimeLocalStorage()
                dispatch({type: 'setToken', data: token})
                return resp.json();
            } else {
                throw new Error("Email already in use");
            }
            })
        .then((json) => {
            const email = json.data.email;
            localStorage.setItem('email', email);
            dispatch({type: 'setLoggedInUser', data: email});
        } )
        .catch((e) => { setFlash(`${e.name}: ${e.message}`)});
    }

    return (
        <div className="Form">
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    { flash && <div style={{ color: 'red' }}>{flash}</div> }
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                        Machi Ramen Sign Up
                    </div>
                    <div className="mb-4">
                        <fieldset>
                            <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">Email</label>
                            <input value={formState.email} onChange={handleChange} className="shadow 
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
                            <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password" >Password</label>
                            <input name='password' type='password' value={formState.password} onChange={handleChange} className="shadow 
                                appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password"/>
                        </fieldset>   
                    </div>   
                    <div className="mb-6">    
                        <fieldset>
                            <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="name">First Name</label>
                            <input name='first_name' type='first_name' value={formState.first_name} onChange={handleChange} className="shadow 
                                appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="First Name"/>
                        </fieldset>
                        <div className="button">
                            <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign Up</button>
                        </div>
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

export default SignUpForm;
