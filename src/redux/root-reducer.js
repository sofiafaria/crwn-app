import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer'; 
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};
//Note: we dont need to pass the user to the json because it is being handled by firebase


const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

/**
 * Combines all the code of all the reducers using combineReducers
 * 
 */