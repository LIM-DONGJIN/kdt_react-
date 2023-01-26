import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import style from './HeaderTop.module.css';
import * as animationData from '../../../lottie/Cart.json';

function HeaderTop() {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [searchWord, setSearchWord] = useState('');
  const searchRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.key === 'Enter') {
      console.log('Enter key pressed');
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchWord(e.target.value);
  }

  return ( 
    <div className={style.headerTopWrap}>
      <h1 className={style.logo}><Link to={'/'}>SSG.COM</Link></h1>
      <form className={style.search} onSubmit={handleSubmit}>
        <input type="text"
          onChange={handleChange}
          defaultValue={searchWord}
        />
      </form>
      <div className={style.cartIcon}>
        <Link to='cart'>
          <Lottie options={defaultOptions}
            height={60}
            width={60}
          />
        </Link>
      </div>
    </div>
   );
}

export default HeaderTop;