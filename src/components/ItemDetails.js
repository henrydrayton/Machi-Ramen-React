import React,{ useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useParams,useHistory} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {getItem, deleteItem} from '../api/itemServices'

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
	
    return (
		<div>
			<p>Category: {item.category_id}</p>
			<p>Name: {item.name}</p>			
			<p>Price: {item.price}</p>
			<p>Description: {item.description}</p>			
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