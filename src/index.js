import { AppContainer } from 'react-hot-loader'
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { history, store } from './storeAndHistory'
import App from './components/App';

const render = () => {
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
  // 组件UI改变时，保存之前的sotre和history
      console.log('app change~!!!!!!!!!!!!!');
      render();
  });
}
