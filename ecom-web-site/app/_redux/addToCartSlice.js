import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CartApis from "../_utils/CartApis"; // Adjust the import path as necessary

// Async thunk for adding to cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cartData) => {
    const response = await CartApis.addToCart(cartData);
    return response.data; // Return the response data
  }
);

const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); // Add the new item to the cart
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture any errors
      });
  },
});

export default addToCartSlice.reducer;
