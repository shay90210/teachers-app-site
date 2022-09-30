import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../features/reducers/cartReducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});