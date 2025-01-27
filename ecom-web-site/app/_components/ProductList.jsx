import React from "react";
import ProductItem from "./ProductItem";
import Image from "next/image";

function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-slate-200">
      {productList.map((product) => {
        // Get medium format images if available, otherwise use the original URL
        const imageUrls = product.images.map(
          (img) => img.formats?.medium?.url || img.url
        );

        return (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              imageUrls,
            }}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
