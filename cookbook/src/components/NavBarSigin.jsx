import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, FormControl, FormGroup, DropdownButton, MenuItem, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class NavBarSigin extends Component {
    render() {
        const {isAuthenticated} = false;

        const userLinks =
        (
                    <NavItem eventKey={1} componentClass={Link} to="/Signin" href="/Signin" >Logout</NavItem>
        );

        const guestLinks = (
                <NavItem eventKey={1} componentClass={Link} to="/Signin" href="/Signin" >Sign In</NavItem>
        );


        return (< Nav pullRight >
                    {isAuthenticated ? userLinks : guestLinks}
                </Nav> );


    }
}


export default NavBarSigin;