import { AppContainer } from 'react-hot-loader'
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { history, store } from './reducers'
import App from './components/App';

const render = () => {
  console.log('store', store.getState());
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('mainBox')
  );
};
render();
if(module.hot) {
  module.hot.accept('./components/App', () => {
      console.log('app change~!!!!!!!!!!!!!');
      render();
  });
}
