import React from 'react';

function ProductCard({product}) {

  return ( 
    <>
      <div className='productCard'>
        <img src={product.thumbnail}  alt=""/>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </>
  );
}

export default ProductCard;