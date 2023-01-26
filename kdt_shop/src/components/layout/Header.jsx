import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../ui/header/HeaderBottom';
import HeaderTop from '../ui/header/HeaderTop';
import styles from './Header.module.css';

function Header() {
  return ( 
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
   );
}

export default Header;