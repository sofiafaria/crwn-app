import { combineReducers } from 'redux';
import CartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer'; 

export default combineReducers({
    user: userReducer,
    cart: CartReducer
});

/**
 * Combines all the code of all the reducers using combineReducers
 * 
 */