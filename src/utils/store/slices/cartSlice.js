import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {




        addItems: (state, action) => {
            if (state.items.find((item) => item.id === action.payload.id)) {
                state.items = state.items.map((item) => (item.id === action.payload.id) ? { ...item, quantity: item.quantity + 1 } : item)
            }
            else {
                state.items = [...state.items, action.payload];
            }

        },
        incrQuantity: (state, action) => {
            state.items = state.items.map((item) => (item.id === action.payload) ? { ...item, quantity: item.quantity + 1 } : item)
        },
        decrQuantity: (state, action) => {
            state.items = state.items.map((item) => (item.id === action.payload) ? { ...item, quantity: item.quantity - 1 } : item)
        }
        ,
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
        ,
        emptyItems: (state) => {
            state.items = [];
        }
    },

});

export const { addItems, incrQuantity, decrQuantity, removeItem, emptyItems } = cartSlice.actions;

export default cartSlice.reducer;      