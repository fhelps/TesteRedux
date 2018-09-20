import { CLICK_UPDATE_VALUE, CLICK_REMOVE_VALUE } from '../actions/actionTypes';
const initialState = {
  newValue: 'Atualizado com redux'
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      console.log(JSON.stringify(action))
      return {
        ...state,
        newValue: action.newValue
      };

    case CLICK_REMOVE_VALUE:
       console.log(JSON.stringify(action))
       return {
         ...state,
         newValue: action.newValue
       };

    default:
      return state;
  }
};