import React,{ useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useParams,useHistory} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {getItem, deleteItem} from '../api/itemServices'
import './Menu.css'

// The ItemDetails component is used to display an individual item on the menu when a user clicks on it.
// The information is fetched from the Rails API which is linked on the ItemServices component a child of Auth.

function ItemDetails() {
	const [item,setItem] = useState(null)
    const {id} = useParams()
	const {store,dispatch} = useGlobalState()
    const {loggedInUser} = store

	let history = useHistory()

	// use callback function getItem to get item details from the server. 
	// it returns a Promise so we need to catch the response
    useEffect(() => {
		getItem(id)
		.then((item) => setItem(item))
		.catch((error) => console.log(error))
	},[id])

    if (!item) return null

	// when Admin click 'delete', callback function deleteItem is called.
	// then delete item from global state, and redirect to menu page
	function handleDelete() {
		deleteItem(id)
		.then(() => {
			dispatch({type: 'deleteItem', data: id})
			history.push('/menu')
		})
	}

// This return function presents the item's category ID, its name, price and description. 

    return (
		<div>
			<div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
				<img src={item.image_url} class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" alt="food"/>	
				<div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
					{/* <p>Category: {item.category_id}</p> */}
					<div class="flex items-center">
						<h2 class="text-xl text-gray-800 font-medium mr-auto">{item.name}</h2>			
						<p class="text-gray-800 font-semi tracking-tighter">${item.price}</p>
					</div>
						<p class="description text-sm text-gray-700 mt-4">Description: {item.description}</p>


{/* If the user's email matches the admin email they will be able update and delete menu items. 
The update function loads the items previous params with an option to change.
The delete function completely removes the item from the menu.  */}
				
						{loggedInUser === "admin@admin.com" &&
						<div className="button">
							<div class="flex items-center justify-end mt-4 top-auto">
								<Link to='/menu' onClick={handleDelete} class="bg-gray-100 text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</Link>
								<Link to={`/items/${item.id}/update`} class=" bg-blue-600 text-gray-50 px-2 py-2 rounded-md ">Update</Link>
							</div>
						</div>
				}
				</div>	
			</div>	
			</div>
	)
}
export default ItemDetails;


		
		


