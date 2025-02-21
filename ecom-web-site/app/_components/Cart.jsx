import Link from "next/link";
import React from "react";

function Cart({ cart, isOpen, onClose }) {
  const cartDetail = cart?.data || [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="min-h-screen px-4 text-center">
        {/* Backdrop */}
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Modal */}
        <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-gray-100 shadow-xl rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Your Cart</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 space-y-6">
            <ul className="space-y-4 max-h-[60vh] overflow-y-auto">
              {cartDetail.length > 0 ? (
                cartDetail.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 border-t border-light pt-3"
                  >
                    <img
                      src={
                        item?.products[0].images[0].url ||
                        "default-image-url.jpg"
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
                          <dt className="inline">Size:</dt>
                          <dd className="inline">{item?.size || "N/A"}</dd>
                        </div>

                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">{item?.color || "N/A"}</dd>
                        </div>
                        <div>
                          <dt className="inline font-bold text-sm">Price:</dt>
                          <dd className="inline font-bold text-red-700 text-sm">
                            ${item?.products[0]?.price || "N/A"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </ul>

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
        </div>
      </div>
    </div>
  );
}

export default Cart;
