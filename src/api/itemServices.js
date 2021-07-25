import {API_URL} from './auth'

// To GET menu items from server and catch the server response. 
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


// To GET a specific menu item from the server and catch the repsonse. 

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

// To DELETE a specific menu item from the server 

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

// To create a specific menu item to the server, fetch the response which includes item id

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

// To update an already created specific menu item in the server 

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