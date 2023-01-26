import React from 'react';
import style from './HeaderBottom.module.css';
import { gnbMenu } from '../../../data/gnbMenu';
import { Link , useLocation } from 'react-router-dom';

function HeaderBottom() {

  const location = useLocation();
  const path = location.pathname;

  return ( 
    <nav className={style.gnb}>
      <ul>
        {
          gnbMenu.map( menu => (
            <li key={menu.id} className={ menu.link === path ? `${style.active}` : ''}>
              <Link to={menu.link}>{menu.name}</Link>
            </li>
          ))
        }
      </ul>
    </nav> 
  );
}

export default HeaderBottom;