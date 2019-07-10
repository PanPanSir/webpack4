import React from 'react';
import Home from '../pages/Home.jsx';
import { Router, Route, createBrowserHistory } from 'history';


const newHistory = new createBrowserHistory();
console.log('Home!!!!!!!!!!!!!!11', Home);
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


export default function () {
  return (
    <Router history={newHistory}>
      <Route path="/" component={Home}></Route>
    </Router>,
    document.getElementById('mainBox')
  );
}
