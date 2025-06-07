import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await (await fetch("https://dummyjson.com/products")).json();
      setData(result.products);
      console.log(result.products);
    })();
  }, []);
  if (!data.length) {
    return <p>Loading...</p>;
  }
  return (
    <div className="products">
      <h2>Product List</h2>
      <div className="product-list">
        {data?.map((i) => {
          return (
            <div className="product-card" key={i.id}>
              <img src={i.thumbnail} alt="Product Image" className="product-image" />
              <h1>{i.title}</h1>
              <p>{i.description}</p>
              <Link className="view-more" to={`/products/${i.id}`} state={i}>
                View More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
