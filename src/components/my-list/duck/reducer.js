import { combineReducers } from 'redux';
import { LOAD } from './type.js';

function data(state = [], action) {
  switch (action.type) {
    case LOAD:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({ data });
