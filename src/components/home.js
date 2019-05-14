import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

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