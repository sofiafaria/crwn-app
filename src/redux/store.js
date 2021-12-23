import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//Set up middleware only for dev environment
const middlewares = [];

if(process.env.NODE_ENV ==='development'){
    middlewares.push(logger);
}
//create store and apply all middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//export localstorage
export const persistor = persistStore(store);

export default { store, persistor };

/**
 * SOME NOTES ABOUT REDUX
 * add middleware to our store so that whenever an action is fired we can catch them and display them.
 * you can add infinite number of middlewares. that's why we use spread operators
 */