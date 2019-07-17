export const homeIntialSate = {
  number: 0,
};
export const HOME_NUMBER = 'HOME_NUMBER';
export const homeReducer = (state = homeIntialSate, action) => {
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

