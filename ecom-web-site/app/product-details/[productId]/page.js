"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../_redux/productIdSlice";
import { getProductsByCategory } from "../../_redux/ProductCategorySlice";
import BreadCrumb from "../../_components/BreadCrumb";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ProductDetails({ params }) {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productId);
  const { products: categoryProducts } = useSelector((state) => state.productsCategory);
  const path = usePathname();
  console.log('paath',path);


  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const productId = unwrappedParams?.productId;

  useEffect(() => {
    if (productId) {
      console.log("Dispatching getProductById with ID:", productId); // Log the productId
      dispatch(getProductById(productId)); // Dispatch action with productId
    }
  }, [dispatch, productId]);

  // Fetch products by category when the product is available
  useEffect(() => {
    if (product && product.category) {
      console.log("Product category:", product.category.id);
      dispatch(getProductsByCategory(product.category.id)); // Dispatch action to fetch products by category
    }
  }, [dispatch, product]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    
    <div className="flex flex-col main-content p-2 bg-slate-300 items-center">
      <BreadCrumb path={path} />
      <div className="flex md:flex-row flex-col mt-10 gap-14">
        <ProductBanner product={product} />
        <ProductInfo product={product} />
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-extrabold text-black pb-5 ">
          YOU MIGHT LIKE
        </h2>
        <div className="flex justify-around gap-4">
          {categoryProducts.map((item) => (
            <Link
              href={`/product-details/${item?.documentId}`}
              // href={`/product-details/${product?.documentId}`}
              key={item.id}
              className="border p-4 bg-white justify-center"
            >
              <Heart className="text-black p-2 rounded-full bg-slate-200 text-[24] w-10 h-10 hover:cursor-pointer hover:text-red-600 hover:bg-lighter transition duration-400 absolute  " />

              <Image
                src={item.images[0].url}
                alt={item.title}
                // layout="responsive" // Use responsive layout
                width={150}
                height={160}
                className="h-auto w-auto items-center"
                // priority
              />

              <h3 className="text-black">{item.title}</h3>
              <p className="text-primary font-bold">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
