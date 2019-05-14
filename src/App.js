import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css'
import Home from './components/home';
import USPSTrack from './components/USPSTrack';
import Settings from './components/settings';
import Navbar from './components/navbar';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/usps' component={USPSTrack}/>
          <Route exact path='/settings' component={Settings}/>
        </Switch>
      </div>
    );
  }
}

export default App;
