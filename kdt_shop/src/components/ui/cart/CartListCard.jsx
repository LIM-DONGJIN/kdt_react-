import React from 'react';

function CartListCard() {
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