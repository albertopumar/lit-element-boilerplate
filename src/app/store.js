import { applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createStore from '../redux-mixing/createStore.js';

// Import app reducers
import counterReducer from '../components/my-counter/duck';
import listReducer from '../components/my-list/duck';

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ counter: counterReducer, list: listReducer });

createStore(rootReducer, middlewareEnhancer);
