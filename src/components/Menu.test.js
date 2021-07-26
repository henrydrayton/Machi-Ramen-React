import React from 'react'
import { StaticRouter } from 'react-router'
import { render } from '@testing-library/react'
import { StateContext } from '../utils/stateContext'
import Menu from './Menu'

jest.mock('./MenuCard', () => (props) => <div>{props.title}</div>)

// The describe feature is used to create dummy items that jest can test. 
// In this case the items are itemA and itemB with corresponding values. 

describe('Menu', () => {
    const store = {
        items: [
            {
                id: 'itemA',
                category_id: 1,
                name: 'nameA',
                price: 50,
                description: 'descriptionA'
            },
            {
                id: 'itemB',
                category_id: 2,
                name: 'nameB',
                price: 80,
                description: 'descriptionB'
            }
        ]
    }

// The 'it' function is used to test what the expected outcome of the method.
// In this case, when  menu items are loading, the app should display 'loading'.
// The getByText method is used to test whether 'loading' is present.

    it('should display loading state when loading menu items', () => {
        const { getByText } = render(
            <StateContext.Provider value={{ store: { items: undefined } }}>
                <StaticRouter>
                    <Menu />
                </StaticRouter>
            </StateContext.Provider>
        )

        expect(getByText(/loading/i)).toBeInTheDocument()
    })

// The second it method tests whether itemA and itemB will eventually be rendered on the screen. 
// Again the getByText method is used and looks for the items name, 'nameA' and 'nameB'.

    it('should display items', () => {
        const { getByText } = render(
            <StateContext.Provider value={{ store }}>
                <StaticRouter>
                    <Menu />
                </StaticRouter>
            </StateContext.Provider>
        )

        expect(getByText(/menu/i)).toBeInTheDocument()
        expect(getByText(/entrees/i)).toBeInTheDocument()
        expect(getByText(/drink/i)).toBeInTheDocument()
    })
})