import React, { useState, useEffect } from 'react';

function Cart() {

  const userId = 1;
  const [cartDatas, setCartDatas] = useState();

  useEffect(() => {

    fetch(`http://localhost:3001/carts?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  },[]);

  return ( 
    <>
    
    </>
   );
}

export default Cart;