import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://fathomless-meadow-24305.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const deliveryUpdate = () => {
    const data = { ...product, stock: product.stock - 1 };
    const url = `https://fathomless-meadow-24305.herokuapp.com/product/${product._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("success", result);
        const url = `https://fathomless-meadow-24305.herokuapp.com/products/${productId}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setProduct(data));
      });
  };

  return (
    <div className="col-md-4 mx-auto my-5">
      <PageTitle title={"Product Detail"} />
      <h2 className="text-center text-info my-3">
        Product Details :{product.name}
      </h2>
      <div className="border rounded p-3 text-center">
        <img width={"100%"} src={product.img} alt="" />
        <h3>{product.name}</h3>
        <h4>Category:{product.category}</h4>
        <h5>Seller: {product.seller}</h5>
        <h5 className="text-danger">Price: {product.price}</h5>
        <p>Stock: {product.stock}</p>
        <p>{product.description}</p>

        <button onClick={deliveryUpdate} className="btn btn-success me-2">
          Delivery
        </button>

        <Link to={`/update/${product._id}`}>
          <button className="btn btn-info">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
