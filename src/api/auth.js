export const API_URL = "https://machi-ramen.herokuapp.com"
// export const API_URL = "http://localhost:3000"

// signIn, signUp, singOut are callback functions which will be called later in SignInForm, SignUpForm, Navv
// It will send the data input to the server.
// An async await function. 

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

// get Token from localStorage
export function getToken() {
    return localStorage.getItem('session_token');
}

// setTime in local storage when signin/signup 
// so we can set up a method to clear storage after 24h when the JWT token has expired
export function setTimeLocalStorage() {
    let now = new Date().getTime();
    localStorage.setItem('setupTime', now) 
}

// clear localstorage after 24h (when the JWT token expired)
export function checkTimeLocalStorage() {
    const hours = 24; // to clear the localStorage after 24 hours
    // const hours = 0.1; // to clear the localStorage after 0.1 hours
    let now = new Date().getTime();
    let setupTime = localStorage.getItem('setupTime');
    if (setupTime) {
      if((now-setupTime) > hours*60*60*1000) {
        localStorage.removeItem('email');
        localStorage.removeItem('session_token');
        localStorage.removeItem('setupTime');
      }
    }
}
