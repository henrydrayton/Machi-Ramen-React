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

export async function deleteItem(id) {
    const token = localStorage.getItem('session_token')
	const url = `${API_URL}/items/${id}`
	const response = await fetch(url, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })
	return response.data
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