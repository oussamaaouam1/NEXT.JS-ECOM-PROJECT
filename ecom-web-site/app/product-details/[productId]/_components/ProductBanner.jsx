import React from "react";
import Image from "next/image";

function ProductBanner({ product }) {
  console.log(product); // Log the product data to check its structure

  return (
    <div
      className="product-banner w-2/3"
      style={{ height: "90vh", overflowY: "auto" }}
    >
      {product ? (
        <>
          {product.images && product.images.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 ">
              {product.images.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative ${index % 3 === 2 ? "col-span-2" : ""}`} // Every third image spans two columns
                >
                  <Image
                    src={image.url}
                    alt={image.alternativeText || product.title}
                    layout="responsive" // Use responsive layout
                    width={300}
                    height={500}
                    className="rounded-sm h-auto w-1/5"
                    priority
                  />
                </div>
              ))}
            </div>
          ) : (
            <div>No images available</div>
          )}
        </>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
}

export default ProductBanner;
