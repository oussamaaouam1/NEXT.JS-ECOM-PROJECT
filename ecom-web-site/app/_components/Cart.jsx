import Link from "next/link";
import React from "react";

function Cart({ cart }) {
  // Extract the cart details
  const cartDetail = cart?.data || []; // Fallback to an empty array if undefined or null
  console.log('ttttttttttttttttttttttttttt',cartDetail);
  // console.log(cartDetail[0].products?.title)

  return (
    <div
      className="absolute top-16 right-36 w-screen max-w-sm max-h-96 border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 overflow-auto "
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <div className="mt-4 space-y-6 ">
        <ul className="space-y-4">
          {cartDetail.length > 0 ? (
            cartDetail.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 border-t  border-light pt-3"
              >
                {/* <div className="border-t  border-light"></div> */}
                <img
                  src={
                    item?.products[0].images[0].url || "default-image-url.jpg"
                  }
                  alt={item?.attributes?.name || "Product"}
                  className="size-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900">
                    {item?.products[0].title || "Product Name"}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline"> Size:</dt>
                      <dd className="inline">{item?.size || "N/A"}</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">{item?.color || "N/A"}</dd>
                    </div>
                    <div>
                      <dt className="inline font-bold text-sm">Price:</dt>
                      <dd className="inline font-bold text-red-700 text-sm">
                        {item?.products[0]?.price || "N/A"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-sm text-gray-500">
              Your cart is empty.
            </p>
          )}
        </ul>
      </div>

      <div className="space-y-4 text-center mt-6">
        <Link
          href="/cart"
          className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400 hover:bg-secondary hover:text-white"
        >
          View my cart ({cartDetail.length})
        </Link>

        <a
          href="#"
          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          Checkout
        </a>

        <a
          href="/product-details"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
    </div>
  );
}

export default Cart;
