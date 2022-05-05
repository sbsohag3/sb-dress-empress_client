import React from 'react';

const Product = ({product}) => {
  const {img, name, price} = product;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>Price: {price}</h4>
    </div>
  );
};

export default Product;