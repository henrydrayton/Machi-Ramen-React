import React from 'react'
import { StaticRouter } from 'react-router'
import { render } from '@testing-library/react'
import { StateContext } from '../utils/stateContext'
import Menu from './Menu'

describe('Menu', () => {
    const store = {
        items: [
            {
                id: 'itemA',
                category_id: 'categoryA',
                name: 'nameA',
                price: 50,
                description: 'descriptionA'
            },
            {
                id: 'itemB',
                category_id: 'categoryB',
                name: 'nameB',
                price: 80,
                description: 'descriptionB'
            }
        ]
    }

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

    it('should display items', () => {
        const { getByText } = render(
            <StateContext.Provider value={{ store }}>
                <StaticRouter>
                    <Menu />
                </StaticRouter>
            </StateContext.Provider>
        )

        expect(getByText(/nameA/i)).toBeInTheDocument()
        expect(getByText(/nameB/i)).toBeInTheDocument()
    })
})