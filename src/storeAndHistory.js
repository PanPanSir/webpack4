import { createBrowserHistory } from 'history';
import { homeReducer } from './reducers';
import { connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux'

export const history = createBrowserHistory()
export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  home: homeReducer, 
});
export function configureStore(preloadedState) {
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
  if (module.hot) { // reducers改变时，更新history，不更新store
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }
  return store
};
