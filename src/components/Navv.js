import React from 'react'
import { NavLink } from './Styled'
import { useHistory } from 'react-router-dom' 
import { signOut } from '../api/auth'
import {useGlobalState} from '../utils/stateContext'

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
                <li><NavLink onClick={() => history.push('/home')}>HOME</NavLink></li>
                <li><NavLink onClick={() => history.push('/menu')}>MENU</NavLink></li>
                <li><NavLink onClick={() => history.push('/contact')}>CONTACT US</NavLink></li>
                {loggedInUser === "admin@admin.com" && 
                    <li><NavLink onClick={() => history.push('/items/new') }>ADD MENU ITEM</NavLink></li>
                }
                {loggedInUser ?
                    <>
                    <li><NavLink onClick={handleSignOut}>LOG OUT</NavLink></li>
                    </>
                :
                    <>
                    <li><NavLink onClick={() => history.push('/signin')}>LOG IN</NavLink></li>
                    <li><NavLink onClick={() => history.push('/signup')}>SIGN UP</NavLink></li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default Navv;
