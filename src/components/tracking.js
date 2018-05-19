import React, { Component } from 'react';
import axios from 'axios';

class Tracking extends React.Component{
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
                    response: `${res.data.TrackResponse.TrackInfo[0].$.ID} \n ${res.data.TrackResponse.TrackInfo[0].TrackSummary}`
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
    
    render(){
        return(
            <div>
                <h3 className='title'>Track</h3>
                <input onChange={this.handleInput} value={this.state.trackNum} id="trackNum" placeholder="Please Enter Tracking Number"></input> 
                <br/>
                <br/>
                <button onClick={this.handleTrackingRequest} type='submit' id="butt">Submit</button>
                <p>{this.state.response}</p>
            </div>
        )
    }
}

export default Tracking;