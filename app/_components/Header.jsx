"use client";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { CartContext } from "../_context/CartContext";
import { ShoppingCart } from "lucide-react";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";
import Link from "next/link";
const Header = () => {
  const { user } = useUser();
  const { cart, setCart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    user && getCartItems();
  }, [user]);
  const getCartItems = () => {
    const email = user?.primaryEmailAddress?.emailAddress ?? "";
    CartApis.getUserCartItems(email).then((res) => {
      console.log("response data", res?.data?.data);
      res?.data?.data.forEach((citem) => {
        setCart((oldCart) => [
          ...oldCart,
          {
            id: citem.id,
            product: citem?.attributes?.products?.data[0],
          },
        ]);
      });
    });
  };
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-md border-b-2">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={70} height={70} />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Shop
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <SignedIn>
            <div className="flex items-center gap-5">
              <h2 className="flex gap-1 text-white">
                <ShoppingCart onClick={() => setOpenCart(!openCart)} />(
                {cart?.length})
              </h2>
              <UserButton />
              {openCart && <Cart />}
            </div>
          </SignedIn>

          <SignedOut>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                  href="/sign-in"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    href="sign-up"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
