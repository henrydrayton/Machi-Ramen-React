import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import './Menu.css'

function Menu() {
    const {store} = useGlobalState()
	const {items} = store
	return  (
	
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
