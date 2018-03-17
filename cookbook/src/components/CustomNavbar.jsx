import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, FormControl, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import NavBarSigin from './NavBarSigin';
import './CustomNavbar.css';
class CustomNavbar extends Component {

    render() {

        return (
            <Navbar fluid default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">CookBook</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                <Navbar.Form pullLeft>
                        <FormGroup >
                                <DropdownButton bsStyle={'default'} title={'All'} key={1} id={`dropdown-basic-`} >
                                    <MenuItem eventKey="1" >All</MenuItem>
                                    <MenuItem eventKey="2" >Cookbook</MenuItem>
                                    <MenuItem eventKey="3" >Ingredients</MenuItem>
                                    <MenuItem eventKey="4" >Users</MenuItem>
                                    <MenuItem eventKey="4" >Receipes</MenuItem>
                                </DropdownButton>
                                <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                    </Navbar.Form>
                    <NavBarSigin/>
                </Navbar.Collapse>
            </Navbar>
            );
    }
}

export default CustomNavbar;