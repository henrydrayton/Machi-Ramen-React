import React, {useState} from 'react';

function SignInForm({ onSignIn }) {
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
        onSignIn(formState)
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