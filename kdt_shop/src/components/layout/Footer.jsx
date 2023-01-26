import React from 'react';
import { footerMenu } from '../../data/footerMenu';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';

function Footer() {
  return ( 
    <footer>
      <nav className={style.myfooter}>
        <ul>
          {
            footerMenu.map( menu => (
              <li key={menu.id}>
                <Link to={menu.link}>
                  <img src={menu.icon} />
                  <p>{menu.name}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </footer>
   );
}

export default Footer;