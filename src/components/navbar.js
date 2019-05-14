import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Link to='/'>Home</Link>
                {` `}
                <Link to="/usps">USPS Track</Link>
                {` `}
                <Link to="/settings">Settings</Link>
                <h1 className='hi'>Welcome to TRACKAGE</h1>
                <p>Trackage is a site that lets you enter your tracking number from UPS, USPS, Fedex or DHL and displays all the info about that package.</p>
            </div>
        )
    }
}

export default Navbar;
