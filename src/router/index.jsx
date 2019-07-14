import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import Home from '../pages/Home.jsx';
import Face from '../pages/Face.jsx';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';

// if(module.hot) {
//   module.hot.accept('../pages/Home.jsx', (params) => {
//       const NewHome = require('../pages/Home.jsx').default;
//       generateRender(NewHome);
//   });
//   module.hot.accept('../pages/Face.jsx', (params) => {
//       const NewFace = require('../pages/Face.jsx').default;
//       generateRender(NewFace);
//   });
// }
const store = configureStore({

});
const generateRender = (NewRouter) => {
  // if (NewRouter) {
  //   ReactDom.render(
  //     <AppContainer>
  //       <NewRouter />
  //     </AppContainer>,
  //       document.getElementById('mainBox')
  //   );
  // } else {
  // }
};
ReactDom.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/home" component={Home}></Route>
        <Route path="/face" component={Face}></Route>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('mainBox')
);