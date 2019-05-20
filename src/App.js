import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import USPSTrack from './components/USPSTrack';
import Settings from './components/settings';
import Naver from './components/navbar';


class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Naver/>
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
