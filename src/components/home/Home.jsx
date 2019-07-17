import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class HomeComponent extends Component {
  render() {
    return (<div>
      <div>{this.props.number}</div>
      <button onClick={() => {
        this.props.addNumber(this.props.number);
      }}>+</button>
      <button onClick={() => this.props.history.push('/face')}>yao face +123</button>
    </div>);
  }
}   

export default connect(state => {
  return ({
    number: state.home.number,
  });
}, actions)(HomeComponent);
