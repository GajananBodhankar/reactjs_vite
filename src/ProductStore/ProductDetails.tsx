import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "./styles.css";
const ProductDetails = () => {
  const data = useParams();
  const { state } = useLocation();
  const { title, description, images, price } = state;
  return (
    <div className="product-details">
      <h1>{title}</h1>
      <img src={images[0]} alt="productImage" className="product-image" />
      <p>{description}</p>
      <p>Price : ${price}</p>
      <Link to={"/products"}>Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
