import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CartApis from "../_utils/CartApis"; // Adjust the import path as necessary

// Async thunk for getting cart items
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (email) => {
    const response = await CartApis.cartItems(email);
    console.log("API Response for Cart Items:", response.data); // Log the response
    return response.data; // Return the response data
  }
);

const getCartItemsSlice = createSlice({
  name: "getCartItems",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload || []; // Store the products in the state
        console.log("Updated Cart Items:", state.items); // Log the updated items
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture any errors
      });
  },
});

export const { actions, reducer } = getCartItemsSlice;
export default reducer;
