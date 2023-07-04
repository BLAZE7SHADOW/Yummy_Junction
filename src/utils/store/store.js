import { configureStore } from "@reduxjs/toolkit";


import cartSlice from "./slices/cartSlice";
import loginSlice from "./slices/loginSlice";

const store = configureStore({

    reducer: {
        cart: cartSlice,
        login: loginSlice,
    },
}


)

export default store;