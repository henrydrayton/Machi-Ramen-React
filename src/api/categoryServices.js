import {API_URL} from './auth'

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
// export async function getCategories() {
//     const response = await API_URL.get('/categories')
//     return response.data
// }