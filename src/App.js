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
          <Route path="/country/:name">
            <Country />
          </Route>
          <Route path="/countries/pages/:page">
            <Countries />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-out">
            <SignOut />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
