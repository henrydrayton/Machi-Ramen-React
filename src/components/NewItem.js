import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { createItem, getItem, updateItem } from '../api/itemServices'
import { useGlobalState } from '../utils/stateContext'

export default function NewItem() {
    const initialFormState = {
		category_id: 1,
		name: '',
        price: '',
        description: ''
	}
	const [formState,setFormState] = useState(initialFormState)

	let history = useHistory()
	let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {categories} = store;

    function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}

    useEffect(() => {
		if(id) {
			getItem(id)
			.then((item) => {
				const category = categories.find((category) => category.id === item.category_id)
				setFormState({
					category_id: category.id,
					name: item.name,
                    price: item.price,
                    description: item.description
				})
			})
		}
	},[id, categories])

    function handleSubmit(event) {
        event.preventDefault()
        if (id) {
            updateItem({id: id, ...formState})
            .then((res) => {
                if (res.ok) {
                    dispatch({type: "updateItem", data: {id: id, ...formState}})
                    
                    history.push(`/items/${id}`)
                    return res.json();
                } else {
                    return res.text().then((text) => Promise.reject(text));
                }
              })
            .then((json) => console.log(json))
            .catch((err) => console.error(err))
        } else {
			createItem({...formState})
            .then((res) => {
                if (res.ok) {
                    dispatch({type: "addItem", data: {...formState}})
                    
                    history.push('/menu')
                    return res.json();
                } else {
                    return res.text().then((text) => Promise.reject(text));
                }
              })
            .then((json) => console.log(json))
            .catch((err) => console.error(err))
		}
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Category:</label>
            <select name='category_id' value={formState.category_id} onChange={handleChange}>
                {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
            <br/>
            <label>Name:</label>
            <input type='text' name='name' value={formState.name} onChange={handleChange}></input>
            <br/>
            <label>Price:</label>
            <input type="number" min="0.5" step="any" name='price' value={formState.price} onChange={handleChange}></input>
            <br/>
            <label>Description:</label>
            <input type='text' name='description' value={formState.description} onChange={handleChange}></input>
            <br/>
            <input type='submit' value={id ? 'Update' : 'Create'}/>
        </form>
    )
}