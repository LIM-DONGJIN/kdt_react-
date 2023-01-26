import React from 'react';

function HeaderTop() {
  return ( 
    <div className='headerTopWrap'>
      <h1 className='logo'>SSG.COM</h1>
      <div className='search'>
        <input type="text" placeholder="Search" />
      </div>
      <div className='cartIcon'>
        장바구니 아이콘
      </div>
    </div>
   );
}

export default HeaderTop;