import React, { Component } from 'react';

class settings extends React.Component{
    constructor(){
        super();
        this.state = {
            num: ''
        }
    }
    
    render(){
        return(
            <div>
                <h1>Settings</h1>
                <p>Fix How Your information is displayed here</p>
            </div>
        )
    }
}

export default settings;