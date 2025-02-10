import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderApis from "../_utils/orderApis"; // api call  path

// Async thunk for adding to cart
export const createOrder = createAsyncThunk("order/createOrder", async (orderData) => {
  const response = await orderApis.createOrder(orderData);
  return response.data; // Return the response data
});

const createOrderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); // Add the new item to the cart
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture any errors
      });
  },
});

export default createOrderSlice.reducer;
