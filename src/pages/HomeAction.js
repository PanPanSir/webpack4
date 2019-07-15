import { HOME_NUMBER, store } from '../router/reducers';

const addNumActionCreator = (number) => {
  return ({
    type: HOME_NUMBER,
    playload: { number }, 
  });
};
export const addNumber = (preNUm) => (dispatch) => {
  const action = addNumActionCreator(preNUm + 1);   
  console.log('dispatch!!!!!!!!!!!!!!1', dispatch);
   
  return store.dispatch(action);
};
