import React from 'react'
import { StaticRouter } from 'react-router'
import { render, fireEvent } from '@testing-library/react'
import { StateContext } from '../utils/stateContext'
import {getItem, deleteItem} from '../api/itemServices'
import ItemDetails from './ItemDetails'

jest.mock('../api/itemServices', () => ({
    getItem: jest.fn(),
    deleteItem: jest.fn()
}))

describe('ItemDetails', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should not render if no item', () => {
        getItem.mockResolvedValue(null)

        const { container } = render(
            <StateContext.Provider value={{ store: { loggedInUser: 'someone' } }}>
                <StaticRouter location="/items/1">
                    <ItemDetails />
                </StaticRouter>
            </StateContext.Provider>
        )
            
        expect(container.firstChild).not.toBeInTheDocument()
    })

    it('should render item', async () => {
        getItem.mockResolvedValue({
            id: 'itemA',
            category_id: 'categoryA',
            name: 'nameA',
            price: 50,
            description: 'descriptionA'
        })

        const { getByText, findByText } = render(
            <StateContext.Provider value={{ store: { loggedInUser: 'someone' } }}>
                <StaticRouter location="/items/1">
                    <ItemDetails />
                </StaticRouter>
            </StateContext.Provider>
        )
        await findByText(/Name: nameA/i)

        expect(getByText(/Category: categoryA/i)).toBeInTheDocument()
        expect(getByText(/Name: nameA/i)).toBeInTheDocument()
        expect(getByText(/Price: 50/i)).toBeInTheDocument()
        expect(getByText(/Description: descriptionA/i)).toBeInTheDocument()
    })

    it('should not render Link if logged in user is not admin', async () => {
        getItem.mockResolvedValue({
            id: 'itemA',
            category_id: 'categoryA',
            name: 'nameA',
            price: 50,
            description: 'descriptionA'
        })

        const { queryByRole, findByText } = render(
            <StateContext.Provider value={{ store: { loggedInUser: 'someone' } }}>
                <StaticRouter location="/items/1">
                    <ItemDetails />
                </StaticRouter>
            </StateContext.Provider>
        )
        await findByText(/Name: nameA/i)
        
        expect(queryByRole('link')).toBeNull()
    })

    it('should render Link if logged in user is admin', async () => {
        getItem.mockResolvedValue({
            id: 'itemA',
            category_id: 'categoryA',
            name: 'nameA',
            price: 50,
            description: 'descriptionA'
        })

        const { queryAllByRole, findByText } = render(
            <StateContext.Provider value={{ store: { loggedInUser: 'admin@admin.com' } }}>
                <StaticRouter location="/items/1">
                    <ItemDetails />
                </StaticRouter>
            </StateContext.Provider>
        )
        await findByText(/Name: nameA/i)
        const [ itemUpdate, menu ] = queryAllByRole('link')

        expect(itemUpdate).toHaveAttribute('href', '/items/itemA/update')
        expect(menu).toHaveAttribute('href', '/menu')
    })

    it('should delete item', async () => {
        getItem.mockResolvedValue({
            id: 'itemA',
            category_id: 'categoryA',
            name: 'nameA',
            price: 50,
            description: 'descriptionA'
        })
        deleteItem.mockResolvedValue()

        const { getByText, findByText } = render(
            <StateContext.Provider value={{ store: { loggedInUser: 'admin@admin.com' }, dispatch: jest.fn() }}>
                <StaticRouter location="/items/1">
                    <ItemDetails />
                </StaticRouter>
            </StateContext.Provider>
        )
        await findByText(/Name: nameA/i)
        fireEvent.click(getByText(/delete/i))

        expect(deleteItem).toBeCalled()
    })
})