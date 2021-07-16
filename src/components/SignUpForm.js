import React, { useState } from 'react';

function SignUpForm({ onSignUp }) {
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
        onSignUp(formState)
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
