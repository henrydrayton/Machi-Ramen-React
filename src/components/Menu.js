// import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import {useGlobalState} from '../utils/stateContext'
import './Menu.css'
import MenuCard from './MenuCard'

function Menu() {
	// takes items out of the global state to use
    const {store} = useGlobalState()
	const {items} = store

	// each variable is an array of items of the same category
	let starter
	let drink 
	let main 
	let dessert

	if (items) {
		starter = items.filter(item => item.category_id === 1)
		drink = items.filter(item => item.category_id === 2)
		main = items.filter(item => item.category_id === 3)
		dessert = items.filter(item => item.category_id === 4)
	}

	return  (
	// This boolean operator checks whether items are present. 
	// If there are no items to display, the function will return 'Loading...'
	// iterates over each item in the database and displays its individual attribute

		items && items.length ?
		(
			<div>
				<h1 className="title">Menu</h1>
				<MenuCard items={starter} title={"Starter"}/>
				<MenuCard items={main} title={"Main"}/>
				<MenuCard items={dessert} title={"Dessert"}/>
				<MenuCard items={drink} title={"Drink"}/>
			</div>
			
		) : (
			<div>Loading&hellip;</div>

		)
		
	)
}

export default Menu;
