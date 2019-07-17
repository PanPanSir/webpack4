import { HOME_NUMBER } from '../../reducers';

const addNumActionCreator = (number) => {
  return ({
    type: HOME_NUMBER,
    playload: { number }, 
  });
};
export const addNumber = (preNUm) => (dispatch) => {
  const action = addNumActionCreator(preNUm + 1);   
  return dispatch(action); // 一定要return
};
