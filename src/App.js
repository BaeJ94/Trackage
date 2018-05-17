import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      trackNum: '',
      response: ''
    }
  }
  handleInput = (e) => {
    this.setState({
      trackNum: e.target.value
    })
  }

  handleTrackingRequest = () =>{
    let {trackNum} = this.state;
    axios.post('/api', {package: trackNum}) 
      .then((res) =>{
        this.setState({
          response: res.data
        })
        console.log(res.data);
      })
      .catch(err => {
        throw err;
      })
      this.setState({
        trackNum: ''
      })
  }

  render() {
    return (
      <div className="App">
        <h1 >HI! </h1>
          <input onChange={this.handleInput} value={this.state.trackNum} id="trackNum" placeholder="Please Enter Your Tracking Number"></input> 
          <br/>
          <br/>
          <button onClick={this.handleTrackingRequest} type='submit' id="butt">Submit</button>
          <p>{this.state.response}</p>
        <Switch>
          <Route exact path='/trackinfo'/>
        </Switch>
      </div>
    );
  }
}

export default App;
