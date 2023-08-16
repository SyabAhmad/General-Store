"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <nav className="bg-[#1268E8] text-white flex justify-between items-center p-10 pl-10 pr-10">
        <h1 className="text-xl">General Pansaar Store</h1>
        {/* for large screens */}
        <div className="hidden md:block">
          <ul className="flex gap-20">
            <ul className="flex gap-5">
              <li>
                <Link
                  href="/"
                  className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/additem"
                  className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                >
                  Add Item
                </Link>
              </li>
              <li>
                <Link
                  href="/showitem"
                  className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                >
                  Show Item
                </Link>
              </li>
              <li>
                <Link
                  href="/showsell"
                  className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                >
                  Show Sell
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  href="/export"
                  className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                >
                  Export
                </Link>
              </li>
            </ul>
          </ul>
        </div>
        {/* for small mobiles and also add icon to it */}
        <div className="block md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/3000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              /> 
            </svg>*/}
          </button>
          {mobileMenuVisible && (
            <div>
              <ul className="flex flex-col gap-4 mt-4">
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/additem"
                    className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                  >
                    Add Item
                  </Link>
                </li>
                <li>
                  <Link
                    href="/showitem"
                    className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                  >
                    Show Item
                  </Link>
                </li>
                <li>
                  <Link
                    href="/showsell"
                    className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                  >
                    Show Sell
                  </Link>
                </li>
                <li>
                  <Link
                    href="/export"
                    className="hover:underline hover:opacity-[.4] transition .2s eas-out"
                  >
                    Export
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
