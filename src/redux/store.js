import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//Set up middleware
const middlewares = [logger];
//create store and apply all middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;