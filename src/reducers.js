import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

export const history = createBrowserHistory()

const homeReducer = (state = homeIntialSate, action) => {
  
  const { playload, type } = action;
  if(action) {
    switch(type) {
      case HOME_NUMBER:
        return { ...state, ...playload };
        break;
      default:
        return state;
    }
  }
  return state;
};
export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  home: homeReducer, 
});
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
      applyMiddleware(thunk),
    ),
  )
  return store
}

export const HOME_NUMBER = 'HOME_NUMBER';
export const homeIntialSate = {
  number: 0,
};
export const store = configureStore();
