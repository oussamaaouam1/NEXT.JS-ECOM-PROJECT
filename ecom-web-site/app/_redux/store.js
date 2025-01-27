"use client";
import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./ProductListSlice";
import productIdReducer from "./productIdSlice";
import productCategoryReducer from "./ProductCategorySlice";
import addToCartReducer from "./addToCartSlice";
import getCartItemsReducer from "./getCartItemsSlice";

export const store = configureStore({
  reducer: {
    products: productListReducer,
    productId: productIdReducer,
    productsCategory: productCategoryReducer,
    cart: addToCartReducer,
    getCartItems: getCartItemsReducer,
  },
});
