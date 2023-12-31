"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
const AddItem = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productActualPrice, setProductActualPrice] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [quantityType, setQuantityType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [formData, setFormData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost/store/addProduct.php", {
        productName,
        productPrice,
        productActualPrice,
        productDetails,
        quantityType,
        quantity,
        formData,
        errorMessage,
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

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
  const handleQuantityType = (e) => {
    setErrorMessage("");

    setQuantityType(e.target.value);
  };
  const handleQuantity = (e) => {
    setErrorMessage("");

    setQuantity(e.target.value);
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

      try {
        const newProduct = [
          productName,
          productPrice,
          productActualPrice,
          productDetails,
          quantity,
          quantityType,
        ];

        setFormData([...formData, newProduct]);
        handleAddProduct();
        setErrorMessage("");
        setProductActualPrice("");
        setProductDetails("");
        setProductName("");
        setQuantity("");
        setQuantityType("");
        setproductPrice("");
        console.log(formData);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onClear = () => {
    setErrorMessage("");
    setProductActualPrice("");
    setProductDetails("");
    setProductName("");
    setQuantity("");
    setQuantityType("");
    setproductPrice("");
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
          <label htmlFor="title">Quantity</label>
          <div>
            <input
              className="border rounded-lg p-2"
              type="text"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={handleQuantity}
            />
            <select
              className="border rounded-lg p-2"
              type="text"
              name="quantity"
              id="quantity"
              value={quantityType}
              onChange={handleQuantityType}
            >
              <option value="">Select</option>
              <option value="KG">Kilo Gram</option>
              <option value="G">Gram</option>
              <option value="MG">Milli Gram</option>
              <option value="tola">Tola</option>
            </select>
          </div>
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
          <div className="flex gap-10">
            <input
              type="Submit"
              name="button"
              id="button"
              onClick={OnSubmit}
              className="p-3 border rounded-xl hover:bg-blue-500 hover:text-white transition .2s ease-in-out"
            />
            <button
              type="clear"
              name="button"
              id="button"
              onClick={onClear}
              className="p-3 border rounded-xl hover:bg-blue-500 hover:text-white transition .2s ease-in-out"
            >
              {" "}
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
