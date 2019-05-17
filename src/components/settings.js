import React from 'react';

class Settings extends React.Component{
    constructor(){
        super();
        this.state = {
            num: ''
        }
    }
    
    render(){
        return(
            <div>
                <h3 className='title'>Settings</h3>
                <p>Fix How Your information is displayed here</p>
            </div>
        )
    }
}

export default Settings;