import { HOME_NUMBER } from '../../reducers';
import catImg from '../../asset/catcat.jpeg';

const addNumActionCreator = (number, catImg) => {
  return ({
    type: HOME_NUMBER,
    playload: { number, catImg }, 
  });
};
export const addNumber = (preNUm) => (dispatch) => {
  const action = addNumActionCreator(preNUm + 1, catImg);   
  return dispatch(action); // 一定要return
};
