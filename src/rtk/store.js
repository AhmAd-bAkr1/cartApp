import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import CartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: CartSlice,
  },
});
