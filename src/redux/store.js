import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//Set up middleware
const middlewares = [logger];
//create store and apply all middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

/**
 * SOME NOTES ABOUT REDUX
 * add middleware to our store so that whenever an action is fired we can catch them and display them.
 * you can add infinite number of middlewares. that's why we use spread operators
 */