import React from 'react'
import { signOut } from '../api/auth'
import {useGlobalState} from '../utils/stateContext'
import { Link } from 'react-router-dom' 
import {useHistory} from 'react-router-dom'

function Navv() {
    let history = useHistory()

    const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store

    function handleSignOut(event) {
		event.preventDefault()
		signOut(loggedInUser)
		.then(() => {
			dispatch({type: 'setLoggedInUser', data: null})
			dispatch({type: 'setToken', data: null})
			history.push('/home')
		})
	}

    return (
        <nav className="nav">
            <h3 className="list-unstyled">Logo</h3>
            <ul className="nav-links">
                <li><Link to='/home'>HOME</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/contact'>CONTACT US</Link></li>
                {loggedInUser === "admin@admin.com" && 
                    <li><Link to='/items/new'>ADD MENU ITEM</Link></li>
                }
                {loggedInUser ?
                    <>
                    <li><Link to='/home' onClick={handleSignOut}>LOG OUT</Link></li>
                    </>
                :
                    <>
                    <li><Link to='/signin'>LOG IN</Link></li>
                    <li><Link to='/signup'>SIGN UP</Link></li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default Navv;
