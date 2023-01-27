import React, { useContext } from 'react';
import style from './ProductCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { QtyContext } from '../../context/QtyContext';

function ProductCard({product}) {

  const contextData = useContext( QtyContext );
  const userId = 1;
  const navigate = useNavigate();

  const handleAddCart = () => {
    fetch('http://localhost:3001/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: product.id,
        userId: userId,
        qty: 1
      })
    })
    .then(res => {
      res.json();
      if(res.ok){
        contextData.setCartQty(contextData.cartQty + 1)
        window.alert('Added to cart');
        navigate('/cart');
      }
    })
    .catch(err => console.error(err));
  }

  return ( 
    <>
      <div className={style.productCard}>
        <Link to = {`/product-detail/${product.id}`} >
          <img src={product.thumbnail}  alt={product.description}/>
        </Link>
          <p className={style.title}>{product.title}</p>
          <p>{product.description}</p>
          <p>{product.price} $</p>
       
        <div 
          onClick={handleAddCart}
          className={style.cartBtn}
        >
          ADD CART
        </div>
      </div>
    </>
  );
}

export default ProductCard;