import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items = [...state.items, action.payload];
        }
    },

});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;