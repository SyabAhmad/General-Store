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
      <div className="flex justify-evenly flex-wrap ">
        <div className="flex justify-center flex-col items-left border-b  hover:border hover:border-b-blue-500 rounded-lg p-10 mt-10 wrap">
          <h2 className="text-3xl">Hello {userName}</h2>
          <p>Good {greeting}</p>
        </div>
        <div className="flex justify-center flex-row gap-5 items-left border border-blue-500 p-10 mt-10 wrap">
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
