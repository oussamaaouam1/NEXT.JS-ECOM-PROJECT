import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CartApis from "../_utils/CartApis"; // Adjust the import path as necessary

// Async thunk for deleting from cart
export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async (productId) => {
    const response = await CartApis.deleteCartItem(productId); // Corrected from ProductId to productId
    return response.data; // Return the response data
  }
);

const deleteCartItemSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the item from the cart
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture any errors
      });
  },
});

export default deleteCartItemSlice.reducer;
