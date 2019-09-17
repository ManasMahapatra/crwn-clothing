//root-reducer contains every reducer
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//This component helps combining reducers
import collectionReducer from './collection/collection.reducer';
import directoryReducer from './directory/directory.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers(
    {
        collections: collectionReducer,
        directory: directoryReducer,
        user: userReducer,
        cart: cartReducer  
    }
)

export default persistReducer(persistConfig,rootReducer);