import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'

function Menu() {
    const {store} = useGlobalState()
	const {items} = store
	return  (
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
