import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productsList: [],
    cartList: [],
    checkOut: {}
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        updateProductsList: (state, action) => {
            let addedUniqueId = [...state.productsList, action.payload].map((obj, i) => ({
                ...obj, id: i + 1
            }))
            console.log("addedUniqueId", addedUniqueId);
            state.productsList = addedUniqueId;
        },
        updateCartList: (state, action) => {
            state.cartList = action.payload;
        },
        updatecheckOut: (state, action) => {
            state.checkOut = action.payload;
        }
    }
})

export const { updateProductsList, updateCartList, updatecheckOut } = productSlice.actions;

export default productSlice.reducer;