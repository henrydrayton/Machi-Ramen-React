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

// This boolean operator checks whether items are present to getByDisplayValue. 
// If there are no items to display, the function will return 'Loading...'
	
			items ?
			(
				<table>
					<thead>
						<tr>
							<th>Category ID</th>
							<th>Name</th>
							<th>Price</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
{/* This method iterates over each item in the database and displays its individual category_id, name, price and description.
The name has a link feature, so when clicked it directs the user to show show the individual item.
If the user has admin rights, they can update or delete the item.  */}

						{
							items.map(item => (
								<tr key={item.id} >
									<td>{item.category_id}</td>
									<td><Link to={`/items/${item.id}`}>{item.name}</Link></td>
									<td>{item.price}</td>
									<td>{item.description}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			) : (
				<div>Loading&hellip;</div>

			)
		
	)
}

export default Menu;
