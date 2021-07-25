import {API_URL} from './auth'

// This is an async await function to request data from the server and catches the response 

export async function getCategories() {
    const url = `${API_URL}/categories`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.json()
}
