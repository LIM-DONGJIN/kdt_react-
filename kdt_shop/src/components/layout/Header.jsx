import React from 'react';
import HeaderBottom from '../ui/header/HeaderBottom';
import HeaderTop from '../ui/header/HeaderTop';

function Header({checker, setChecker}) {
  

  return ( 
    <header>
      <HeaderTop
        checker={checker}
        setChecker={setChecker}
      />
      <HeaderBottom />
    </header>
   );
}

export default Header;