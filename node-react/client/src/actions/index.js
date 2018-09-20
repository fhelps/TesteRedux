import { CLICK_UPDATE_VALUE, CLICK_REMOVE_VALUE } from './actionTypes';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});


export const remove = value => ({
  type: CLICK_REMOVE_VALUE,
  newValue: value
});

