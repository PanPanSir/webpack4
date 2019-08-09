import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { history, configureStore } from './storeAndHistory'
import App from './components/App';
import './components/home/home.css';

export const store = configureStore();
const render = (Component) => {
  ReactDom.render(
      <Provider store={store}>
        <Component history={history} />
      </Provider>,
    document.getElementById('mainBox')
  );
};
render(App);
if(module.hot) {
  module.hot.accept('./components/App', () => {
  // 组件UI改变时，保存之前的sotre和history
    console.log('app change~!!!!!!!!!!!!!');
    render(App);
  });
}
