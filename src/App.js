import React, { useState, useEffect , useReducer} from 'react';

import Navv from './components/Navv'
import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'
import Contact from './components/Contact'
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { getToken, signOut } from './api/auth'
import Footer from './components/Footer'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import {getCategories} from './api/categoryServices'
import {getItems} from './api/itemServices'
import ItemDetails from './components/ItemDetails'
import NewItem from './components/NewItem'

function App() {
  const [setToken] = useState(getToken());
  // const [flash, setFlash] = useState('');

  const initialState = {
		loggedInUser: localStorage.getItem('email') || null,
		auth: {token: getToken() || null},
    items: [],
		categories: []
  }
	const [store, dispatch] = useReducer(stateReducer,initialState)

  useEffect(() => {
		getItems()
		.then((items) => dispatch({type: 'setItems', data: items}))
		.catch((error) => console.log(error))
		getCategories()
		.then(categories => dispatch({type: 'setCategories', data: categories}))
		.catch((error) => console.log(error))
	},[])
   

  return (
    <div className="page-container">
      <div className="content-wrap">
        <StateContext.Provider value={{store,dispatch}}>
          <Router> 
            <div className="App">
                <Navv />
                {/* { flash && <div>{flash}</div> } */}
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/menu" component={Menu} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/signin" component={SignInForm} />
                  <Route path="/signup" component={SignUpForm} />
                  <Route path="/signout" render={() => {
                    signOut().then(() => setToken());
                    return <Redirect to='/home'/>
                  }} />
                  <Route exact path='/items/new' component={NewItem} />
                  <Route exact path='/items/:id/update' component={NewItem} />
                  <Route path='/items/:id' component={ItemDetails}/> 

                </Switch>
            </div>
          </Router>
        </StateContext.Provider>
      </div>
      < Footer />
    </div>
  );
}

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// )


export default App;