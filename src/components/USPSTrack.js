import React, { Component } from 'react';
import axios from 'axios';
//
class USPSTrack extends React.Component{
    constructor(){
        super();
        this.state = {
            trackNum: '',
            Identity: '',
            TrackDeet: '',
            TrackSum: ''
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
                console.log(res.data.TrackResponse.TrackInfo[0].TrackDetail)
                //let blah = res.data.TrackResponse.TrackInfo[0].values.map();
                this.setState({
                    Identity: res.data.TrackResponse.TrackInfo[0].$.ID,
                    TrackDeets: res.data.TrackResponse.TrackInfo[0].TrackDetail,
                    TrackSum: res.data.TrackResponse.TrackInfo[0].TrackSummary
                })
            //Use .map or similar object method to filter into into bullets or paragraphs
            
            console.log(res.data.TrackResponse.TrackInfo[0]);
            })
            .catch(err => {
                throw err;
            })
            this.setState({
                trackNum: ''
            })
    }

    
    render(){
        let theDeets = '';

        if (this.state.TrackDeets) {
            theDeets = this.state.TrackDeets.map((detail) => {
                return (<li> {detail} </li>)
            })
        }

        return(
            <div>
                <h3 className='title'>Track</h3>
                <input onChange={this.handleInput} value={this.state.trackNum} id="trackNum" placeholder="Please Enter Tracking Number"></input> 
                <br/>
                <br/>
                <button onClick={this.handleTrackingRequest} type='submit' id="butt">Submit</button>
                <p>{this.state.Identity}</p>
                <ul>{theDeets}</ul>
                <p>{this.state.TrackSum}</p>
            </div>
        )
    }
}

export default USPSTrack;