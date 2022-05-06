import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [delivery, setDelivery] = useState(true);

  const handleDeliveryItem = (stock) => {
    setDelivery(stock.stock - 1);
   
  };

  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [delivery]);
  return (
    <div className="col-md-4 mx-auto my-5">
      <h2 className="text-center text-info my-3">Product Details</h2>
      <div className="border rounded p-3 text-center">
        <img width={"100%"} src={product.img} alt="" />
        <h3>{product.name}</h3>
        <h4>Category:{product.category}</h4>
        <h5>Seller: {product.seller}</h5>
        <h5 className="text-danger">Price: {product.price}</h5>
        <p>Stock: {product.stock}</p>
        <p>{product.description}</p>
        <button
          onClick={(delivery) => handleDeliveryItem(product)}
          className="btn btn-success me-2"
        >
          Delivery
        </button>
        <button className="btn btn-info">Update</button>
      </div>
    </div>
  );
};

export default ProductDetail;
