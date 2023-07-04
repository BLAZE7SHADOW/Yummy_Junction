import { createAsyncThunk } from "@reduxjs/toolkit";

const getProductDetails = createAsyncThunk("product/get", async () => {
    try {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

export default getProductDetails;
