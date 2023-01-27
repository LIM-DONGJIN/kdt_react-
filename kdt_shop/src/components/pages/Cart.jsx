import React, { useEffect, useState } from 'react';
import CartListCard from '../ui/cart/CartListCard';
import style from './Cart.module.css';

function Cart() {

  const userId = 1;
  const [cartDatas, setCartDatas] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:3001/carts?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });

  },[userId]);

  return ( 
    <div className={style.cartListWrap}>
      <CartListCard />
    </div>
  );
}

export default Cart;