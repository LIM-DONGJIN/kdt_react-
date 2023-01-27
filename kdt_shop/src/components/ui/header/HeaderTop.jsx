import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// css
import style from './HeaderTop.module.css';
// lottie
import * as animationData from '../../../lottie/Cart.json';
import Lottie from 'react-lottie';

function HeaderTop() {

  // lottie options  -- 이거 이해못했음
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  // state for search word
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = () => {
    console.log('찾아주세요~~~', searchWord);
    fetch(`https://dummyjson.com/products/search?q=${searchWord}`)
    .then(res => res.json())
    .then(data => console.log(data));
  }

  // search word change handler
  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchWord(event.target.value);
  }

  return ( 
    <div className={style.headerTopWrap}>
      <h1 className={style.logo}><Link to={'/'}>SSG.COM</Link></h1>
      <div className={style.search}>
        <input type="text"
          onChange={handleChange}
          onKeyDown={(e)=> e.key === 'Enter' && handleSearch()}
          defaultValue={searchWord}
        />
      </div>
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