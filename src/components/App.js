import React from 'react'
import Navv from './Navv'
import About from './About'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'
import LogIn from './LogIn'
import '../App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router> 
      <div className="App">
          <Navv />
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/About" component={About} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Contact" component={Contact} />
            <Route path="/LogIn" component={LogIn} />
          </Switch>
      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// )


export default App;
