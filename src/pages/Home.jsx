import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom' 
import * as actions from './HomeAction';

class HomeComponent extends Component {
  render() {
    return (<div>
      <div>{this.props.number}</div>
      <button onClick={() => {
        this.props.addNumber(this.props.number);
      }}>+</button>
      <button onClick={() => this.props.history.push('/face')}>yao face</button>
    </div>);
  }
}   

export default withRouter(connect(state => {
  return ({
    number: state.home.number,
  });
}, actions)(HomeComponent));
