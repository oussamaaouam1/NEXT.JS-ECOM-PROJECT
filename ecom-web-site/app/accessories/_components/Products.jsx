"use client";
import React from "react";
import { getProductsByCategory } from "../../_redux/ProductCategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";
import { List } from "lucide-react";

function Products() {
  const dispatch = useDispatch();
  const path = usePathname();
  // const { product, loading, error } = useSelector((state) => state.productId);
  const { products: categoryProducts } = useSelector(
    (state) => state.productsCategory
  );

  useEffect(() => {
    dispatch(getProductsByCategory(1)); // 1  represents the id of Accessories category
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-3xl text-start p-4 bg-slate-300 text-primary font-extrabold">
        Man's Gym Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-slate-300">
        {categoryProducts?.map((item) => (
          <Link
            href={`/product-details/${item?.documentId}`}
            key={item.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow bg-white cursor-pointer"
          >
            <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto mb-4 ">
              <Heart className="text-black p-2 rounded-full bg-slate-200 text-[24] w-10 h-10 hover:cursor-pointer hover:text-red-600 hover:bg-lighter transition duration-400 absolute z-10 " />

              <Image
                src={item.images[0].url}
                alt={item.title}
                // width={150}
                // height={160}
                fill
                className="rounded-t-lg p-4 hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="p-5">
              <p className="text-secondary font-bold">
                {Array.isArray(item.description)
                  ? item.description[1]?.children[0]?.text
                  : item.description}
              </p>
              <h3 className="text-sm text-gray-500 font-bold flex items-center gap-2">
                <List className="w-4 h-4 text-primary" />
                {item?.category.name}
              </h3>

              <h3 className="text-2xl font-bold mb-2 text-primary ">
                {item.title}
              </h3>
              <p className="text-lg font-bold mt-2 text-black ">
                ${item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
