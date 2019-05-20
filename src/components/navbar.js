import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



class Naver extends Component {
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Features</Nav.Link>
                        <Nav.Link href="/">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <Link to='/'>Home</Link>
                {` `}
                <Link to="/usps">USPS Track</Link>
                {` `}
                <Link to="/settings">Settings</Link>
                <h1>Welcome to TRACKAGE</h1>
                <p>Trackage is a site that lets you enter your tracking number from UPS, USPS, Fedex or DHL and displays all the info about that package.</p>
            </div>
        )
    }
}

export default Naver;
