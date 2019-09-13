//root-reducer contains every reducer
import { combineReducers } from 'redux';
//This component helps combining reducers
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer =  combineReducers(
    {
        user: userReducer,
        cart: cartReducer  
    }
)

export default rootReducer;