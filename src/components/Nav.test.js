import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { StateContext } from '../utils/stateContext'
import { signOut } from '../api/auth'
import Nav from './Navv'

// mock file ../api/itemServices
jest.mock('../api/auth', () => ({
    signOut: jest.fn()
}))

describe('Nav', () => {
    // clear returned value of the getItem, deleteItem
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should render nav bar', () => {
        const { getByText, getByAltText } = render(
            <StateContext.Provider value={{ store: { loggedInUser: undefined } }}>
                <StaticRouter>
                    <Nav />
                </StaticRouter>
            </StateContext.Provider>
        )

        expect(getByAltText('homepage')).toHaveAttribute('src', '/images/logo.png')
        expect(getByText(/home/i)).toBeInTheDocument()
        expect(getByText(/menu/i)).toBeInTheDocument()
        expect(getByText(/about/i)).toBeInTheDocument()
        expect(getByText(/contact us/i)).toBeInTheDocument()
        expect(getByText(/login/i)).toBeInTheDocument()
        expect(getByText(/sign up/i)).toBeInTheDocument()
    })

    it('should render logout if user logged in', () => {
        const { getByText, queryByText } = render(
            <StateContext.Provider value={{ store: { loggedInUser: 'someone' } }}>
                <StaticRouter>
                    <Nav />
                </StaticRouter>
            </StateContext.Provider>
        )

        expect(getByText(/log out/i)).toBeInTheDocument()
        expect(queryByText(/login/i)).not.toBeInTheDocument()
        expect(queryByText(/sign up/i)).not.toBeInTheDocument()
    })

    it('should render add menu item if user logged in as admin', () => {
        const { getByText } = render(
            <StateContext.Provider value={{ store: { loggedInUser: 'admin@admin.com' } }}>
                <StaticRouter>
                    <Nav />
                </StaticRouter>
            </StateContext.Provider>
        )

        expect(getByText(/add menu item/i)).toBeInTheDocument()
    })

    it('should sign user out if user click on log out link', async () => {
        signOut.mockResolvedValue(null)
        const dispatch = jest.fn()

        const { getByText } = render(
            <StateContext.Provider value={{ store: { loggedInUser: 'admin@admin.com' }, dispatch }}>
                <StaticRouter>
                    <Nav />
                </StaticRouter>
            </StateContext.Provider>
        )
        fireEvent.click(getByText('LOG OUT'))

        await waitFor(() => {
            expect(signOut).toHaveBeenCalled()
            expect(dispatch).toHaveBeenCalledWith({type: 'setLoggedInUser', data: null})
            expect(dispatch).toHaveBeenCalledWith({type: 'setToken', data: null})
        })
    })
})