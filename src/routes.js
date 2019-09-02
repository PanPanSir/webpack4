import React from 'react';
import Home from './components/home/Home.jsx';
import Face from './components/face/Face.jsx';
import { Route, Switch } from 'react-router'

export const routes = (
  <div>
     <Route path='/' exact component={Home} />
     <Route path='/face' component={Face} />
  </div>
)
