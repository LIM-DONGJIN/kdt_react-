import React, { useState, useEffect } from 'react';

function CartListCard({cartData}) {

  const [cartObj, setCartObj] = useState(
    {
      id: cartData.id,
      userId: cartData.userId,
      productId: cartData.productId,
      productImg: "",
      productName: "",
      productPrice: 0,
      qty: cartData.qty,
    }
  )

  const url = `http://localhost:3001/products/${cartData.productId}`;

  useEffect(()=>{
    fetch(url)
    .then( res => res.json())
    .then( data => {
        setCartObj({ 
        ...cartObj, 
        productImg: data.thumbnail,
        productName: data.title,
        productPrice: data.price
      })
    })
  },[url])

  return ( 
    <>
     <div className='cartListCard'>
        <img src={cartObj.productImg} alt={cartObj.productName} />
        <div>
          <h3>{cartObj.productName} </h3>
          <p>price : {cartObj.productPrice}</p>
          <div className='qtyHandler'>
            <button>-</button>
            <p>{cartObj.qty}</p>
            <button>+</button>
          </div>
          <p>total price : {cartObj.productPrice * cartObj.qty} $</p>
        </div>
        <div>
          <button>삭제</button>
        </div>
      </div>
    </> 
  );
}

export default CartListCard;