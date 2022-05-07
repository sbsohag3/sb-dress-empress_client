import React from "react";
import { useNavigate } from "react-router-dom";

const SingleItem = ({ product }) => {
  const { _id, img, name, price, stock } = product;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="text-center border p-2">
      <img src={img} className="w-100" alt="" />
      <h3>{name}</h3>
      <h4 className="text-danger">Price: {price}</h4>
      <p>Stock : {stock}</p>
      <button
        onClick={() => navigateToProductDetail(_id)}
        className="btn btn-info px-5"
      >
        Details
      </button>
    </div>
  );
};

export default SingleItem;
