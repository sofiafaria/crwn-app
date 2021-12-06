import { combineReducers } from 'redux';
import userReducer from './user/user.reducer'; 

export default combineReducers({
    user: userReducer
});

/**
 * Combines all the code of all the reducers using combineReducers
 * 
 */