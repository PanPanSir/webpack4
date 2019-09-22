import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNumber } from './actions';
import * as styles from './home.css';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.updateInterState = this.updateInterState.bind(this);
    if(module.hot) {
        this.state = {
          innerNum: 13,
          didMountText: '傻了吧，constructor执行了！!'
        }; 
        return;
    }
    this.state = {
      innerNum: 13,
      didMountText: 'hot update时，你猜did mount和constructor有没有执行',
    };
  }
  componentDidMount() {
  }
  updateInterState(newState) {
    this.setState(newState);
  }
  render() {
    const { innerNum, didMountText } = this.state;
    return (<div>
      <div>{this.props.number}</div>
      <img className={styles.catImg} src={this.props.catImg} />
      <button onClick={() => {
        this.props.addNumber(this.props.number);
      }}>+</button>
      <button onClick={() => this.props.history.push('/face')}>yao face</button>
      <button onClick={() => this.updateInterState({ innerNum: innerNum + 1 })}> 加 inner number !!{innerNum}</button>
      <div className={styles.mainConainer}>{didMountText}</div>
    </div>);
  }
}   

export default connect(state => {
  return ({
    number: state.home.number,
    catImg: state.home.catImg,
  });
}, { addNumber })(HomeComponent);
