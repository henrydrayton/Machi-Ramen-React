import {API_URL} from './auth'

export async function getItems() {
	const url = `${API_URL}/items`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.json()
	// return Promise.resolve(items)
}
export async function getItem(id) {
    const url = `${API_URL}/items/${id}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.json()
}

export async function deleteItem(id) {
    const token = localStorage.getItem('session_token')
	const url = `${API_URL}/items/${id}`
	const response = await fetch(url, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
    })
	return response
}

export async function createItem({ category_id, name, description, price }){
    const token = localStorage.getItem('session_token')
    const url = `${API_URL}/items`
	const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        // mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({ item: { category_id, name, description, price } })
    })
	console.dir(response)
	return response
}

export async function updateItem({id, category_id, name, description, price }){
    const token = localStorage.getItem('session_token')
    console.log("this is the token", token)
    const url = `${API_URL}/items/${id}`
	const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({ item: { category_id, name, description, price } })
    })
	return response
}