import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApis from "../_utils/ProductApis";

// Async thunk to fetch products by category
export const getProductsByCategory = createAsyncThunk(
  "products/getByCategory",
  async (category) => {
    try {
      const response = await ProductApis.getProductByCategory(category);
      return response.data.data; // Return the array of products
    } catch (error) {
      throw error; // Propagate the error
    }
  }
);

const productCategorySlice = createSlice({
  name: "productsCategory",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Store the fetched products
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message
      });
  },
});

export default productCategorySlice.reducer;
