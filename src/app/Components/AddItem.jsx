"use client";
import React from "react";
import { useState } from "react";
const AddItem = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setproductPrice] = useState("");

  const [productActualPrice, setProductActualPrice] = useState("");

  const [productDetails, setProductDetails] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setErrorMessage("");

    setProductName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setErrorMessage("");

    setproductPrice(e.target.value);
  };
  const handleActualPriceChange = (e) => {
    setErrorMessage("");

    setProductActualPrice(e.target.value);
  };
  const handleDetailsChange = (e) => {
    setErrorMessage("");

    setProductDetails(e.target.value);
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    // constraints
    if (!productName || !productActualPrice || !productPrice) {
      setErrorMessage("All Field Are Required");
    } else if (
      isNaN(parseFloat(productPrice)) ||
      isNaN(parseFloat(productActualPrice))
    ) {
      setErrorMessage("Prices Should be valid Number");
    } else {
      console.log("success");
      setErrorMessage("");
    }
  };
  return (
    <>
      <div className="bg-white m-10 p-5">
        <h1 className="text-center mt-10 text-2xl">Add Item</h1>
        <br />
        {/* Form */}
        <form className="flex flex-col items-center">
          <label htmlFor="title">Name of The Product:</label>

          <input
            className="border rounded-lg p-2 "
            type="text"
            name="title"
            id="title"
            value={productName}
            onChange={handleNameChange}
          />
          <br />
          <label htmlFor="title">Price of The Product:</label>

          <input
            className="border rounded-lg p-2"
            type="text"
            name="prices"
            id="price"
            value={productPrice}
            onChange={handlePriceChange}
          />
          <br />
          <label htmlFor="title">Actual Price of The Product:</label>

          <input
            className="border rounded-lg p-2"
            type="text"
            name="actualprices"
            id="actualPrice"
            value={productActualPrice}
            onChange={handleActualPriceChange}
          />
          <br />
          <label htmlFor="title">Details of The Product:</label>

          <textarea
            className="border rounded-lg p-2"
            type="text"
            name="details"
            id="detail"
            value={productDetails}
            onChange={handleDetailsChange}
          ></textarea>
          <br />

          <p className="text-red-600">
            {"*"} {errorMessage}
          </p>

          <input
            type="Submit"
            name="button"
            id="button"
            onClick={OnSubmit}
            className="p-3 border rounded-xl hover:bg-blue-500 hover:text-white transition .2s ease-in-out"
          />
        </form>
      </div>
    </>
  );
};

export default AddItem;
