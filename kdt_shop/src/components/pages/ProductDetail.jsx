import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3001/products/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProduct(data)
    })
    .catch(err => console.log(err))

  },[]);

  return ( 
    <div>
      {
        product && (
          <>
            <img src={product.thumbnail} alt={product.description}/>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.discountPercentage}</p>
            <p>{product.price - (product.price * product.discountPercentage)}</p>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            {
              product.images.map((image, idx) => (
                <img 
                  src={image} 
                  alt={`${product.description}+${idx}`} 
                  key={idx}
                />
              ))
            }
          </>
        )
      }
      
    </div>
   );
}

export default ProductDetail;