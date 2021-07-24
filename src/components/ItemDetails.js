import React,{ useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useParams,useHistory} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {getItem, deleteItem} from '../api/itemServices'

// The ItemDetails component is used to display an individual item on the menu when a user clicks on it.
// The information is fetched from the Rails API which is linked on the ItemServices component a child of Auth.




function ItemDetails() {
	const [item,setItem] = useState(null)
    const {id} = useParams()
	const {store,dispatch} = useGlobalState()
    const {loggedInUser} = store

	let history = useHistory()


    useEffect(() => {
		getItem(id)
		.then((item) => setItem(item))
		.catch((error) => console.log(error))
	},[id])

    if (!item) return null

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
			<p>Category: {item.category_id}</p>
			<p>Name: {item.name}</p>			
			<p>Price: {item.price}</p>
			<p>Description: {item.description}</p>	

{/* If the user's email matches the admin email they will be able update and delete menu items. 
The update function loads the items previous params with an option to change.
The delete function completely removes the item from the menu.  */}
		
			{loggedInUser === "admin@admin.com" &&
				<div>
					<Link to={`/items/${item.id}/update`}>Update</Link>
					<Link to='/menu' onClick={handleDelete}>Delete</Link>
				</div>
            }
		</div>
	)
}

export default ItemDetails;