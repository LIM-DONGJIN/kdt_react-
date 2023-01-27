import React, { useState, useEffect } from 'react';

function CartListCard({cartData}) {

  const [cartObj, setCartObj] = useState(
    {
      id: cartData.id,
      userId: cartData.userId,
      productId: cartData.productId,
      productName: "",
      productPrice: 0,
      qty: cartData.qty,
    }
  )

  useEffect(()=>{
    fetch(`http://localhost:3001/products/${cartObj.id}`)
    .then( res => res.json())
    .then( data => {
        setCartObj({ 
        ...cartObj, 
        productName: data.title,
        productPrice: data.price
      })
    })
  },[cartObj])

  return ( 
    <>
     <div className='cartListCard'>
        <img src="" alt="" />
        <div>
          <h3>상품명</h3>
          <p>price</p>
          <div className='qtyHandler'>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <p>total price</p>
        </div>
        <div>
          <button>삭제</button>
        </div>
      </div>
    </> 
  );
}

export default CartListCard;