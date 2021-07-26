import React from 'react'
import { StaticRouter } from 'react-router'
import { render, fireEvent } from '@testing-library/react'
import { StateContext } from '../utils/stateContext'
import SignInForm from './SignInForm'



describe('SignInForm', () => {
    const initialFormState = {
        items: [
            {
                email: 'admin@admin.com',
                password: 'password'
            }
        ]
    }

    it('should display text input form', () => {
        const { getByText } = render(
            <StateContext.Provider value={{ form: { items: undefined } }}>
                <StaticRouter>
                    <SignInForm />
                </StaticRouter>
            </StateContext.Provider>
        )

        expect(getByText(/email/i)).toBeInTheDocument()
        expect(getByText(/sign in/i)).toBeInTheDocument();

    })
})
