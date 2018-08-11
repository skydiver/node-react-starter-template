import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as demo from '../actions/demo';
import logo from '../static/logo.svg';
import '../static/App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(demo.getMessage());
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>{this.props.message}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(state => {
  return {
    message: state.demo.message,
  }
})(App);