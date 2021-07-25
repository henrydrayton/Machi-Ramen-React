import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { createItem, getItem, updateItem } from '../api/itemServices'
import { useGlobalState } from '../utils/stateContext'

// render form to create a new item or update an item, then handle the input.
export default function NewItem() {
    // set initialFormState
    const initialFormState = {
		category_id: 1,
		name: '',
        price: '',
        description: '',
        image: null
	}
	const [formState,setFormState] = useState(initialFormState)

	let history = useHistory()
	let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {categories} = store;

    // handle input change (name, price, description)
    function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}

    // handle the file chosen to upload
    function fileSelectedHandler(event) {
        setFormState({
            ...formState,
            image: event.target.files[0]
        })
    }

    // if item id exists, it indicates that admin wants to update item. 
    // useEffect will help to populate the input with existing attributes of the item
    useEffect(() => {
		if(id) {
			getItem(id)
			.then((item) => {
				const category = categories.find((category) => category.id === item.category_id)
				setFormState({
					category_id: category.id,
					name: item.name,
                    price: item.price,
                    description: item.description,
                    image: item.image_url
				})
			})
		}
	},[id, categories])

    // function handleSubmit summons either the callback function updateItem (if item id exists) or createItem
    // The response is a Promise so we need to catch the response. 
    // If successful response, new item/ updated item will be recorded in global state
    function handleSubmit(event) {
        event.preventDefault()
        if (id) {
            updateItem({id: id, ...formState})
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text().then((text) => Promise.reject(text));
                }
              })
            .then((data) => {
                dispatch({type: "updateItem", data: {id: id, ...data}})
                history.push(`/items/${id}`)
            })
            .catch((err) => console.error(err))
        } else {
			createItem({...formState})
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text().then((text) => Promise.reject(text));
                }
            })
            .then((json) => {
                dispatch({type: "addItem", data: json})
                history.push('/menu')
            })
            .catch((err) => console.error(err))
		}
    }

    // Conditional Rendering title. If id exists in the parammeter, the title is "update item".
    // If not, the title is "New Item"
    let title
    if (id) {
        title = "Update Item"
    } else {
        title = "New Item"
    }

    return (
        <div className="Form">
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                            {title}
                        </div>
                        <div className="mb-6">
                            <label>Category:</label>
                            <select name='category_id' value={formState.category_id} onChange={handleChange}>
                                {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
                            </select>
                        </div>
                        <br/>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-normal mb-2">Name:</label>
                            <input type='text' name='name' value={formState.name} onChange={handleChange} className="shadow 
                                    appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Name"></input>
                        </div>
                        <br/>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-normal mb-2">Price:</label>
                            <input type="number" min="0.5" step="any" name='price' value={formState.price} onChange={handleChange} className="shadow 
                                    appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Price"></input>
                        </div>
                        <br/>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-normal mb-2">Description:</label>
                            <input type='text' name='description' value={formState.description} onChange={handleChange} className="shadow 
                                    appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Description"></input>
                        </div>
                        <br/>
                        <div className="mb-6">
                            <label htmlFor="image" className="block text-gray-700 text-sm font-normal mb-2">Upload Image:</label>
                            <input type="file" name="image" accept="image/*" onChange={fileSelectedHandler}/>
                        </div>

                        <div className="button">
                            <button value={id ? 'Update' : 'Create'} className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Submit</button>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2021 Machi Ramen. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}