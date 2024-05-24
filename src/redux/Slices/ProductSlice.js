import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productsList: [],
    cartList: []
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
        }
    }
})

export const { updateProductsList, updateCartList } = productSlice.actions;

export default productSlice.reducer;