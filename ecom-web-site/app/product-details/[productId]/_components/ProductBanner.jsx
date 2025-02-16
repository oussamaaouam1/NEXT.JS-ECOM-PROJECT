import React from "react";
import Image from "next/image";

function ProductBanner({ product }) {
  console.log(product); // Log the product data to check its structure

  return (
    <div
      className="product-banner w-full md:w-2/3"
      style={{ height: "90vh", overflowY: "auto" }}
    >
      {product ? (
        <>
          {product.images && product.images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative ${index % 3 === 2 ? "md:col-span-2" : ""}`}
                >
                  <Image
                    src={image.url}
                    alt={image.alternativeText || product.title}
                    layout="responsive"
                    width={300}
                    height={500}
                    className="rounded-sm h-auto w-full"
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
