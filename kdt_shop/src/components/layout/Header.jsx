import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return ( 
    <header>
      <h1 className={styles.logo}>SSG.com</h1>
      <nav>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/product'>ProductList</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
          <li><Link to='/wish'>Wish</Link></li>
        </ul>
      </nav>
    </header>
   );
}

export default Header;