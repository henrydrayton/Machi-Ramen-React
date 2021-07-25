// import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import './Menu.css'


function Menu() {
	// takes items out of the global state to use
    const {store} = useGlobalState()
	const {items} = store

	return  (
	// This boolean operator checks whether items are present. 
	// If there are no items to display, the function will return 'Loading...'
	// iterates over each item in the database and displays its individual attribute

			items && items.length ?
			(
					<div>
						<h1 className="title">Menu</h1>
						{items.map(item => (
						<div key={item.id}>
							<div className="card-container">
									<div className="md:flex shadow-lg  mx-6 md:mx-auto my-20 max-w-lg md:max-w-2xl h-64">
										<p><img src={item.image_url} className="h-full w-full md:w-3/3  object-cover rounded-lg rounded-r-none pb-5/6" alt="food"/></p>
										<div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
											<div className="flex items-center">
												<h2><Link to={`/items/${item.id}`} className="text-xl text-gray-800 font-medium mr-auto">{item.name}</Link></h2>
												<div className="price">
													<p className="text-gray-800 font-semi tracking-tighter">${item.price}</p>
												</div>
											</div>
											<p className=" description text-sm text-gray-700 mt-4">{item.description}</p>
											{/* <p>Category ID: {item.category_id}</p> */}
										</div>
									</div>
							</div>
						</div>
							))}
					</div>
				
			) : (
				<div>Loading&hellip;</div>

			)
		
	)
}

export default Menu;
