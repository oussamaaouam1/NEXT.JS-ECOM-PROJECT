import React from "react";
import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";

function ProductItem({ product }) {
  const randomDiscount = Math.floor(Math.random() * (30 - 5 + 1)) + 5;
  return (
    <Link
      href={`/product-details/${product?.documentId}`}
      className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow bg-white cursor-pointer  "
    >
      {/* Image container with fixed aspect ratio and max width/height */}
      <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto mb-4 ">
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white z-10">
          Save {randomDiscount}%
        </span>

        {product.imageUrls[0] && (
          <Image
            src={product.imageUrls[0]}
            alt={product.title}
            fill
            // height={500}
            // width={700}
            // sizes="(max-width: 768px) 100vw, 400px"
            className=" rounded-t-lg p-4 hover:scale-105 transition-all duration-300"
            priority
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2 text-primary ">
          {product.title}
        </h3>
        <p className="text-secondary font-bold">
          {Array.isArray(product.description)
            ? product.description[1]?.children[0]?.text
            : product.description}
        </p>
        <h3 className="text-sm text-gray-500 font-bold flex items-center gap-2">
          <List className="w-4 h-4 text-primary" />
          {product.category.name}
        </h3>
        <p className="text-lg font-bold mt-2 text-black flex">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
