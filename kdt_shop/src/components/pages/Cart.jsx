import React, { useEffect, useState } from 'react';
import CartListCard from '../ui/cart/CartListCard';
import style from './Cart.module.css';

function Cart() {

  const userId = 1;
  const [cartDatas, setCartDatas] = useState([]);
  const [delCheck, setDelCheck] = useState(false);

  useEffect(() => {
    console.log(delCheck);
    fetch(`http://localhost:3001/carts?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCartDatas(data)
    });

  },[userId, delCheck]);

  return ( 
    <div className={style.cartListWrap}>
      {
        cartDatas && cartDatas.map( cartData => (
          <CartListCard 
            key={cartData.id}
            cartData={cartData}
            delCheck={delCheck}
            setDelCheck={setDelCheck}
          />
        ))
      }
    </div>
  );
}

export default Cart;