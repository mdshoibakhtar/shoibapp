import { configureStore } from "@reduxjs/toolkit";
import productSclice from "./productSclice";

export const store = configureStore({
    reducer: {
        productData: productSclice
    }
})