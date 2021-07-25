import React from 'react'
import { StaticRouter } from 'react-router'
import { render, fireEvent } from '@testing-library/react'
import { StateContext } from '../utils/stateContext'
import SignUpForm from './SignUpForm'


describe('SignUpForm', () => {
    const initialFormState = {
        user: [
            {
                email: 'admin@admin.com',
                password: 'password',
                first_name: 'admin'
            }
        ]
    }

    it('should display text input form', () => {
        const { getByText, getByRole } = render(
            <StateContext.Provider value={{ form: { user: undefined } }}>
                <StaticRouter>
                    <SignUpForm />
                </StaticRouter>
            </StateContext.Provider>
        )

        expect(getByText(/email/i)).toBeInTheDocument();
        expect(getByText(/password/i)).toBeInTheDocument()
        expect(getByText(/first name/i)).toBeInTheDocument()
        expect(getByRole('button')).toHaveTextContent('Sign Up')
    })
})
