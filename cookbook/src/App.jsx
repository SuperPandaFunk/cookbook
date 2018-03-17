import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signin from './components/Signin';
import Navbar from './components/CustomNavbar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUser} from './actions/user-actions';

class App extends Component {
  constructor(){
    super();
    this.onUpdateUser =this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }
    render() {

      return (
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/sigin" component={Signin} />
            <input onChange={this.onUpdateUser}/>
            {this.props.user.name}
          </div>
      </Router>);
    }
}
const mapStateToProps = (state, props) => {
  return({
      products: state.products,
      user: state.user,
      userPlus: `${state.user} ${props.test}`
  })
};

const mapActionToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateUser: updateUser
  },dispatch);
  
};
export default connect(mapStateToProps, mapActionToProps)(App);
