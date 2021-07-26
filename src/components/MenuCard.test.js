import React from 'react'
import { StaticRouter  } from 'react-router-dom'
import { render } from '@testing-library/react'
import MenuCard from './MenuCard'

describe('MenuCard', () => {
    it('should render menu card', () => {
        const items = [
            {
                id: 'id',
                name: 'nameA',
                price: 50,
                description: 'description',
                image_url: 'image_url'
            }
        ]

        const { queryByText, getByAltText, getByRole } = render(
            <StaticRouter>
                <MenuCard items={items} title="entrees" />
            </StaticRouter>
        )

        expect(queryByText(/entrees/i)).toBeInTheDocument()
        expect(queryByText(/nameA/i)).toBeInTheDocument()
        expect(queryByText(/50/i)).toBeInTheDocument()
        expect(queryByText(/description/i)).toBeInTheDocument()
        expect(getByAltText('food')).toHaveAttribute('src', 'image_url')
        expect(getByRole('link')).toHaveAttribute('href', '/items/id')
    })
})