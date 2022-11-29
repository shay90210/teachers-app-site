import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'idle',
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if(state.value > 0) {
                state.value -= 1;
            }
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const counterReducer = counterSlice.reducer;