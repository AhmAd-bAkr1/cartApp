import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../../db-api/db.json"

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const res = await fetch(db.json);
    const data = await res.json();
    console.log(data);
    return data;
  }
);

export const productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
