import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from './PRODUCTS';

const initialState = {
    productsArray: PRODUCTS
};

const productsSlice = createSlice({
    name: 'products',
    initialState
});

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => {
    return state.products.productsArray; 
};

export const selectProductById = (id) => {
    return PRODUCTS.find((product) => product.id === parseInt(id));
};