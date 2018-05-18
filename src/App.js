import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import settings from './components/settings';
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
          response: res.data.TrackResponse.TrackInfo[0].$.ID + "\n" + res.data.TrackResponse.TrackInfo[0].TrackSummary
        })
        //Use .map or similar object method to filter into into bullets or paragraphs
        
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
        <Link to="/settings" render={settings}>Settings</Link>
        <h1>Welcome to TRACKAGE</h1>
        <p>Trackage is a site that lets you enter your tracking number from UPS, USPS, Fedex or DHL and displays all the info about that package.</p> 
        <input onChange={this.handleInput} value={this.state.trackNum} id="trackNum" placeholder="Please Enter Tracking Number"></input> 
        <br/>
        <br/>
        <button onClick={this.handleTrackingRequest} type='submit' id="butt">Submit</button>
        <p>{this.state.response}</p>
        <Switch>
          <Route exact path='./components/settings'/>
        </Switch>
      </div>
    );
  }
}

export default App;
