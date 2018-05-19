import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css'
import Tracking from './components/tracking';
import Settings from './components/settings';

class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <div className="App">
        <Link to="/">Track</Link>
        {` `}
        <Link to="/settings">Settings</Link>
        <h1>Welcome to TRACKAGE</h1>
          <p>Trackage is a site that lets you enter your tracking number from UPS, USPS, Fedex or DHL and displays all the info about that package.</p>

        <Switch>
          <Route exact path='/' component={Tracking}/>
          <Route exact path='/settings' component={Settings}/>
        </Switch>
      </div>
    );
  }
}

export default App;
