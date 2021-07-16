import React, { useState, useEffect } from 'react';

import Navv from './components/Navv'
import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'
import Contact from './components/Contact'
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { signIn, getToken, signUp, signOut } from './api/auth'
import Footer from './components/Footer'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  const [token, setToken] = useState(getToken());
  const [flash, setFlash] = useState('');

  const handleSignIn = (email, password) => {
    signIn(email, password)
      .then(token => { setToken(token); setFlash('') })
      .catch(err => { console.dir({ err }); setFlash('Unable to log in')})
  }
  const handleSignUp = (email, password) => {
    signUp(email, password)
      .then(token => { setToken(token) })
      .catch(error => { console.dir({ error })})
  }
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router> 
          <div className="App">
              <Navv />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/menu" component={Menu} />
                <Route path="/contact" component={Contact} />
                <Route path="/signin" render={() => (<SignInForm onSignIn={handleSignIn}/>)} />
                <Route path="/signup" render={() => (<SignUpForm onSignUp={handleSignUp}/>)} />
                <Route path="/signout" render={() => {
                  signOut().then(() => setToken());
                  return <Redirect to='/home'/>
                }} />
              </Switch>
          </div>
        </Router>
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
