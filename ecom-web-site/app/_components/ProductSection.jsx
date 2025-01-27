"use client";
import React, { useEffect } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getLatestProducts } from "../_redux/ProductListSlice";

function ProductSection() {
  const dispatch = useDispatch();
  const { productList, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getLatestProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  // console.log(productList);

  return (
    <div>
      <h1 className="text-3xl text-start p-4 bg-slate-200 text-primary font-extrabold">Latest Products</h1>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductSection;
