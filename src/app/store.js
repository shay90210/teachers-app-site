import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../features/products/productsSlice';
import { counterReducer } from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        counter: counterReducer
    }
});