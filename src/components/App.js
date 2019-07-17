import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router'
import { routes } from '../routes';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
};
// 一定要包一下，否则module.hot监听不到app的变化
export default hot(module)(App);
