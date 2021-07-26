import React from 'react'
import { signOut } from '../api/auth'
import {useGlobalState} from '../utils/stateContext'
import { Link } from 'react-router-dom' 
import {useHistory} from 'react-router-dom'

// The useHistory hook is used to determine whether a user is signed in or Notification.
//  If they are the nav bar will only display 'Sign Out', if they aren't the nav bar will display 
//  'Sign Up' and 'Log In'.

function Navv() {
    let history = useHistory()

    const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store

// This function is used to sign a user out.
//  When a user clicks on the 'Sign Out' tab their session token will be set to
//  null and they will then be redirected to the Home page.

    function handleSignOut(event) {
		event.preventDefault()
		signOut(loggedInUser)
		.then(() => {
			dispatch({type: 'setLoggedInUser', data: null})
			dispatch({type: 'setToken', data: null})
			history.push('/home')
		})
	}

// The return method render the logo which is stored in the public images folder.
// It also renders links to all pages within the application so users have an efficient means to navigate around the site.

    return (

        <nav className="nav">
         
            {/* <h3 className="list-unstyled">Logo</h3> */}
            <img src="/images/logo.png" alt="homepage" className="logo" />
            <ul className="nav-links">
                <li><Link to='/home'>HOME</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/contact'>CONTACT US</Link></li>
                {loggedInUser === "admin@admin.com" && 
                    <li><Link to='/items/new'>ADD MENU ITEM</Link></li>
                }

{/* This boolean logic checks whether a user is signed in. 
If they click on the Sign Out tab the handleSignOut method is called.  */}

                {loggedInUser ?
                    <>
                    <li><Link to='/home' onClick={handleSignOut}>LOG OUT</Link></li>
                    </>
                :
// If signed out, the nav bar will render 'LOG IN' and 'SIGN UP'
                    <>
                    <li><Link to='/signin'>LOGIN</Link></li>
                    <li><Link to='/signup'>SIGN UP</Link></li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default Navv;
