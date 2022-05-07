import React from 'react';

const Product = ({product}) => {
  const {img, name, price, stock} = product;
  return (
    <div className='text-center border'>
      <img src={img} className='w-100' alt="" />
      <h3>{name}</h3>
      <h4 className='text-danger'>Price: {price}</h4>
      <p>Stock :{stock}</p>
    </div>
  );
};

export default Product;