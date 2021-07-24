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

export async function createItem(item){
    const token = localStorage.getItem('session_token')
    const url = `${API_URL}/items`
    const formData = new FormData()
    Object.keys(item).map(k => {
        return formData.set(k, item[k])
    })
	const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `${token}`
        },
        cache: 'no-cache',
        body: formData
    })
	return response
}

export async function updateItem(item){
    const token = localStorage.getItem('session_token')
    const url = `${API_URL}/items/${item.id}`
    const formData = new FormData()
    Object.keys(item).map(k => {
        return formData.set(k, item[k])
    })
	const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `${token}`
        },
        mode: 'cors',
        cache: 'no-cache',
        body: formData
    })
	return response
}