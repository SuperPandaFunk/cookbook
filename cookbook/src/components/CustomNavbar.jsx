import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './CustomNavbar.css';
class CustomNavbar extends Component {
    render() {

        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Brand</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/" href="/" >Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/about" href="/about">About</NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/news" href="/news">News</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            );
    }
}

export default CustomNavbar;