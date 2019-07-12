import React from 'react';
import Home from '../pages/Home.jsx';
import Face from '../pages/Face.jsx';
import { AppContainer } from 'react-hot-loader';
import { HashRouter, Route, matchPath } from 'react-router-dom';
import ReactDom from 'react-dom';

let s = Symbol();
typeof s
console.log('includes!1', Array.prototype.includes('h'));
async function a() {
  console.log('begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done');
}
a();

console.log(Object.values({ 1: 2 }));
console.log(Array.isArray([]));
if(module.hot) {
  const curHref = window.location.href;
  module.hot.accept('../pages/Home.jsx', (params) => {
    if (curHref.includes('home')) {
      const NewHome = require('../pages/Home.jsx').default;
      generateRender(NewHome);
    }
  });
  module.hot.accept('../pages/Face.jsx', (params) => {
    if (curHref.includes('face')) {
      const NewFace = require('../pages/Face.jsx').default;
      generateRender(NewFace);
    }
  });
}
console.log('lalalal');
const generateRender = (NewRouter) => {
  if (NewRouter) {
    ReactDom.render(
      <AppContainer>
        <HashRouter>
          <NewRouter />
        </HashRouter>
      </AppContainer>,
        document.getElementById('mainBox')
    );
  } else {
    ReactDom.render(
        <HashRouter>
          <Route path="/home" component={Home}></Route>
          <Route path="/face" component={Face}></Route>
        </HashRouter>,
        document.getElementById('mainBox')
    );
  }
};
generateRender();