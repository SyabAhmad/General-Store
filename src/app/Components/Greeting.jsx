"use client";

import Link from "next/link";
import React from "react";

import { useState, useEffect } from "react";
const Greeting = () => {
  const [userName, setUserName] = useState("Nadar Khan");
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const date = new Date();
    if (date.getHours() < 12 && date.getHours() > 1) {
      setGreeting("Morning");
    } else if (date.getHours() > 12 && date.getHours() < 20) {
      setGreeting("AfterNoon");
    } else {
      setGreeting("Evening");
    }
  }, []);

  return (
    <>
      <div className="flex justify-evenly flex-wrap gap-10 md:gap-32">
        <div className="bg-gray-50 flex justify-center flex-col transition .2s ease-in items-left border-b border-t  border-b-blue-500 border-t-blue-500 hover:shadow-light-50 rounded-lg p-10 mt-10 wrap">
          <h2 className="text-3xl">Hello {userName}</h2>
          <p>Good {greeting}</p>
        </div>
        <div className=" bg-gray-50 flex justify-center flex-row gap-5 items-left border border-b-blue-500 border-t border-t-blue-500 p-10 mt-10 wrap rounded-xl">
          <Link href="/additem">
            {/* <img src={} alt="items" /> */}
            <span>Add Item</span>
          </Link>
          <Link href="/additem">
            {/* <img src={} alt="items" /> */}
            <span>Add Item</span>
          </Link>
          <Link href="/additem">
            {/* <img src={} alt="items" /> */}
            <span>Add Item</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Greeting;
