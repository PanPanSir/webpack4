import React, { Component } from 'react';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.addNum = this.addNum.bind(this);
  }
  addNum() {
    this.setState({
      number: this.state.number + 2,
    });
  }
  render() {
    return (<div>
      <div>{this.state.number}</div>
      <button onClick={this.addNum}>+</button>
      <button onClick={() => this.props.history.push('./face')}>yao face</button>
    </div>);
  }
}   

export default HomeComponent;