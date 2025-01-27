import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApis from "../_utils/ProductApis";

export const getProductById = createAsyncThunk(
  "products/getById",
  async (productId) => {
    try {
      console.log("Fetching product with ID:", productId);
      const response = await ProductApis.getProductById(productId);
      console.log("API Response:", response.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }
);


const productIdSlice = createSlice({
  name: "productId",
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error= null
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productIdSlice.reducer;
