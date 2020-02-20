import { createStore } from 'redux';

let store;

export default function(appReducer, initialState, middlewareEnhancer) {
  store = createStore(appReducer, initialState, middlewareEnhancer);

  return store;
}

export const getStore = () => store;
