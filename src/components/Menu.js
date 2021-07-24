import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import './Menu.css'

// The const {store} = useGlobalState() takes items out of the global state to use
// 	   const {items} = store

function Menu() {
    const {store} = useGlobalState()
	const {items} = store

	return  (
// This boolean operator checks whether items are present. 
// If there are no items to display, the function will return 'Loading...'
// iterates over each item in the database and displays its individual attribute
			items.length ?
			(
				<div>
					{items.map(item => (
						<div key={item.id}>
							<h3>Name: <Link to={`/items/${item.id}`}>{item.name}</Link></h3>
							<p>Price: {item.price}</p>
							<p>Description: {item.description}</p>
							<p>Category ID: {item.category_id}</p>
							<p>Image: <img src={item.image_url} alt="food"/></p>
						</div>
					))}
				</div>
			) : (
				<div>Loading&hellip;</div>

			)
		
	)
}

export default Menu;
