import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApis from "../_utils/ProductApis";

export const getLatestProducts = createAsyncThunk(
  // This string is a unique action type prefix that Redux Toolkit uses to generate action types
  // for this async thunk. The full action types will be:
  // "products/getLatest/pending"
  // "products/getLatest/fulfilled"
  // "products/getLatest/rejected"
  "products/getLatest",
  async () => {
    const response = await ProductApis.getLatestProducts();
    console.log("API Response:", response.data); // Add this line

    return response.data.data;
  }
);




const productListSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLatestProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLatestProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(getLatestProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productListSlice.reducer;
