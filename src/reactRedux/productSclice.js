import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        babData: {
            value: 0,
            product: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfCOJU-5uIzZG_9i2_KUMgwdDk96Ddu9fKA&usqp=CAU"
        },
        bhkchondharData: [

        ]

    },
    reducers: {
        increment: (state) => {
            // console.log(state);
            // console.log(state.value);
            state.data.value += 1;
        },
        decrement: (state) => {
            state.data.value -= 1;
        }
    }
})
export const { increment, decrement } = productSlice.actions
export default productSlice.reducer;