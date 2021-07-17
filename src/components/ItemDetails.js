import React,{ useState,useEffect} from 'react'

import {useParams,useHistory} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {Button} from './Styled'
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
			history.push('/items')
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
					<Button onClick={() => history.push(`/items/update/${id}`)}>Update</Button>
					<Button onClick={handleDelete}>Delete</Button>
				</div>
            }
		</div>
	)
}

export default ItemDetails;