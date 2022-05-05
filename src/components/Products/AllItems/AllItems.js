import React, { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Product from "../Product/Product";
import "./AllItems.css";

const AllItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <PageTitle title={"AllItems"} />

      <h2 className="text-center my-5 text-info">All Items</h2>
      <div className="services-container">
        {products.map((product) => (
          <div key={product.id}>
            <div className="text-center border p-2">
              <img src={product.img} className="w-100" alt="" />
              <h3>{product.name}</h3>
              <h4 className="text-danger">Price: {product.price}</h4>
              <button className="btn btn-info px-5">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
