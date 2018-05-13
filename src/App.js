import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 >HI! </h1>
        <input id="trackNum" placeholder="Tracking Number"></input> 
        <br/>
        <br/>
        <button id="butt">Enter</button>
      </div>
    );
  }
}

export default App;
