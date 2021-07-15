import React from 'react'
import Navv from './Navv'
import About from './About'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'
import LogIn from './LogIn'
import Footer from './Footer'
import '../App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router> 
          <div className="App">
              <Navv />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Menu" component={Menu} />
                <Route path="/Contact" component={Contact} />
                <Route path="/LogIn" component={LogIn} />
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
