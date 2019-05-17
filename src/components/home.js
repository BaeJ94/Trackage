import React, { Component } from 'react';


import USPSTrack from './USPSTrack';

class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <USPSTrack/>
            </div>
        )
    }
}

export default Home;