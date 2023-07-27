import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity = findProduct.quantity + 1;
      } else {
        const productQuantity = { ...action.payload, quantity: 1 };
        state.push(productQuantity);
      }
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addProduct, removeProduct, clear } = CartSlice.actions;
export default CartSlice.reducer;
