import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';
class Home extends Component {
    render() {

        return (
        <Grid>
            <Jumbotron>
                <h2>Test</h2>
                <p>Test</p>
            </Jumbotron>
            <Link to="/about">
            <Button bsStyle="primary"> About</Button>
            </Link>
        </Grid>);
    }
}

export default Home;