//root-reducer contains every reducer
import { combineReducers } from 'redux';
//This component helps combining reducers
import userReducer from './user/user.reducer';

const rootReducer =  combineReducers(
    {
        user: userReducer   
    }
)

export default rootReducer;