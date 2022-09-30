import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice ({
    name: 'name',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload)
        }
    }
});

export const { addToCart } = cartSlice.actions; 

export default cartSlice.reducer;