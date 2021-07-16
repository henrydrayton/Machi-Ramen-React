const TOKEN_KEY = 'session_token';

export const API_URL = process.env.REACT_APP_API_URL

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
    if (resp.ok) {
        const token = resp.headers.get("Authorization");
        console.dir(token);
        return setToken(token);
    } else {
        const { status, statusText } = resp;
        return Promise.reject({ status, statusText });
    }
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
    if (resp.ok) {
        const token = resp.headers.get('Authorization');
        console.dir(token);
        return setToken(token);
    } else {
        const { status, statusText } = resp;
        return Promise.reject({ status, statusText });
    }
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
            return removeToken();
        } else {
            console.error({ resp })
            const { status, statusText } = resp;
            return Promise.reject({ status, statusText });
        }
    })
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    return token;
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    return true;
}