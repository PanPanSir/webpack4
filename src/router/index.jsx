import React from 'react';
import { Provider } from 'react-redux'
import { ReactReduxContext } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import { history } from './reducers'
import Home from '../pages/Home.jsx';
import Face from '../pages/Face.jsx';
import { AppContainer } from 'react-hot-loader';
import { renderRoutes } from 'react-router-config'
// import { BrowserRouter as Router } from 'react-router-dom';
import ReactDom from 'react-dom';
import { store } from './reducers';

const App = ({ history, context }) => {
  return (
    <ConnectedRouter history={history} context={context}>
      { routes }
    </ConnectedRouter>
  )
};
const render = () => {
  console.log('store', store.getState());
  
  ReactDom.render(
    <Provider store={store} context={ReactReduxContext}>
      <App history={history} context={ReactReduxContext} />
    </Provider>,
    document.getElementById('mainBox')
  );
};
if(module.hot) {
  module.hot.accept('../pages/Home.jsx', (params) => {
      console.log('home change~!!!!!!!!!!!!!');
      render();
  });
  module.hot.accept('../pages/Face.jsx', (params) => {
      console.log('face change~!!!!!!!!!!!!!');
      render();
  });
}
const routes = (
  <div>
      {renderRoutes([
        { path: '/', exact: true, component: Home },
        { path: '/face', component: Face },
      ])}
  </div>
)
render();