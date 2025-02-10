"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../_redux/getCartItemsSlice";
import Cart from "./Cart";

const Header = () => {
  // console.log(window.location.href);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openCart, setOpenCart] = useState(false)
  useEffect(() => {
    setIsLoggedIn(
      window.location.href.toString().includes("sign-in") ||
        window.location.href.toString().includes("sign-up")
    );
  }, []);

  const { user } = useUser();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.getCartItems);

  useEffect(() => {
    if (user) {
      dispatch(getCartItems(user.primaryEmailAddress.emailAddress)); // Fetch cart items based on user email
    }
  }, [dispatch, user]);

  // Log the items whenever they change // this lines is optional for just log the items in the consol after items changes.
  useEffect(() => {
    console.log("Cart Items Updated:", items); // Log the cart items
  }, [items]);

  return (
    !isLoggedIn && (
      <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md header">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Image
                src="/sports wear.png"
                alt="logo"
                width={85}
                height={80}
                color="#ffff"
                className="mt-2"
              />
            </div>

            <div className="hidden md:block ">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/mens-wear"
                    >
                      {" "}
                      Men's Wear{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Women's Wear{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Accessories{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      About Us{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-secondary transition duration-500 hover:text-black "
                    href="http://localhost:3000/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-light px-5 py-2.5 text-sm font-medium text-black hover:bg-primary duration-300 hover:text-white"
                      href="http://localhost:3000/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex gap-8 items-center ">
                  <UserButton />
                  <div className="pt-6">
                    <ShoppingCart
                      className="text-primary cursor-pointer"
                      onClick={() => setOpenCart(!openCart)}
                    />
                    <p className="bg-light rounded-full relative bottom-8 left-4 text-center text-black font-bold cursor-pointer">
                      {items?.data?.length}
                    </p>
                  </div>

                  {openCart && <Cart cart={items} />}
                </div>
              )}

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
