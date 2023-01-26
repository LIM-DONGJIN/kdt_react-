import React, { useState } from 'react';

function Cart() {

  let x = 10;
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1)
    console.log(number)
  }

  const minus = () => {
    setNumber(number - 1)
    console.log(number)
  }

  return ( 
    <>
    <h2>cart {number}</h2>
    <button onClick={add}>+</button>
    <button onClick={minus}>-</button>
    </>
   );
}

export default Cart;