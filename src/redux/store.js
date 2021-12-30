import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
//Set up middleware only for dev environment

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV ==='development'){
    middlewares.push(logger);
}
//create store and apply all middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

//export localstorage
export const persistor = persistStore(store);

/**
 * SOME NOTES ABOUT REDUX
 * add middleware to our store so that whenever an action is fired we can catch them and display them.
 * you can add infinite number of middlewares. that's why we use spread operators
 * 
 * REDUX-THUNK
 * If redux-thunk middleware is enabled, any time you attempt to dispatch a function instead of an object, 
 * the middleware will call that funcion with dispatch method itself as the first argument
 * Redux-thunk will detect actions that aren't objects and gives the dispatch function as an argument to this object and now I can dispatch to my reducer the normal objects
 * that it actually needs
 * 
 */