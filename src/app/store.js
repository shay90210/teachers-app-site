import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../features/products/productsSlice';
import { counterReducer } from '../features/counter/counterSlice';
import { cartReducer } from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        counter: counterReducer,
        cart: cartReducer
    }
});