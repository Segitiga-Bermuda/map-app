import React from 'react';
import './App.css';
import Country from './components/Country'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import SignUp from './components/SignUp'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Countries from './components/Countries'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <SignIn />
          </Route>
          <Route path="/countries/:name">
            <Country />
          </Route>
          <Route path="countries" exact={true}>
            <Countries />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUp />
          </Route>
          <Route path="/sign-out">
            <SignOut />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/about-us" exact={true}>
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
