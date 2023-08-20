"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ShowItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/store/getProducts.php")
      .then((response) => {
        // This block is executed if the request is successful
        setProducts(response.data); // Assuming the data is an array of products
        console.log("Data retrieved successfully:", response.data);
      })
      .catch((error) => {
        // This block is executed if an error occurs during the request
        console.error("Error retrieving data:", error);
      });
  }, []);

  return (
    <>
      <div className="m-10 flex gap-10 flex-col">
        <h1 className="text-center">Item List</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5">
          <div>
            <label htmlFor="priceCategory">Price: </label>
            <select name="category" id="category">
              <option value="A">Masala 1</option>
              <option value="B">Masala 2</option>
              <option value="C">Masala 3</option>
              <option value="D">Masala 4</option>
              <option value="E">Masala 5</option>
              <option value="F">Masala 6</option>
            </select>
          </div>
          <div>
            <label htmlFor="priceCategory">Quantity: </label>

            <select name="category" id="category">
              <option value="A">Masala 1</option>
              <option value="B">Masala 2</option>
              <option value="C">Masala 3</option>
              <option value="D">Masala 4</option>
              <option value="E">Masala 5</option>
              <option value="F">Masala 6</option>
            </select>
          </div>
          <div>
            <label htmlFor="priceCategory">Sales: </label>

            <select name="category" id="category">
              <option value="A">Masala 1</option>
              <option value="B">Masala 2</option>
              <option value="C">Masala 3</option>
              <option value="D">Masala 4</option>
              <option value="E">Masala 5</option>
              <option value="F">Masala 6</option>
            </select>
          </div>
          <div>
            <label htmlFor="priceCategory">Price: </label>

            <select name="category" id="category">
              <option value="A">Masala 1</option>
              <option value="B">Masala 2</option>
              <option value="C">Masala 3</option>
              <option value="D">Masala 4</option>
              <option value="E">Masala 5</option>
              <option value="F">Masala 6</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {/* <div className="flex flex-col flex-wrap bg-white mx-4 border border-blue-500 p-5 gap-3 rounded-xl">
          <h2>
            Name: <strong>Lawang</strong>
          </h2>
          <h3>
            Price: <strong className="underline">200/KG</strong>
          </h3>
          <h3>
            Quantity: <strong>KG</strong>
          </h3>
          <h3 className="text-sm">Details: Spacial for Eye Sigtness</h3>
        </div> */}

        {products.map((data) => (
          <div
            key={data.id}
            className="flex flex-col flex-wrap bg-white mx-4 border border-blue-500 p-5 gap-3 rounded-xl"
          >
            <h2>
              Name: <strong>{data.productPrice}</strong>
            </h2>
            <h3>
              Price:{" "}
              <strong className="underline">{data.productPrice}/KG</strong>
            </h3>
            <h3>
              Quantity: <strong>{data.quantity}</strong>
            </h3>
            <h3 className="text-sm">Details: {data.productPrice}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowItemList;
