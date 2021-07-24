export const API_URL = "https://machi-ramen.herokuapp.com"
// export const API_URL = "http://localhost:3000"


export async function signIn({email, password}) {
    const url = `${API_URL}/users/sign_in`

    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({ user: { email, password } })
    });
    return resp;
}


export async function signUp({email, password, first_name}) {
    const url = `${API_URL}/users`;

    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({ user: { email, password, first_name } })
    });
    return resp;
}

export function signOut() {
    const url = `${API_URL}/users/sign_out`;

    return fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Accept': 'application/json',
            'Authorization': getToken()
        }
    }).then(resp => {
        if (resp.ok) {
            localStorage.removeItem('email');
            localStorage.removeItem('session_token');
            return 
        } else {
            console.error({ resp })
            const { status, statusText } = resp;
            return Promise.reject({ status, statusText });
        }
    })
}

export function getToken() {
    return localStorage.getItem('session_token');
}