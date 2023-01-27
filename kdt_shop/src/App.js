import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/pages/Main';
import ProductDetail from './components/pages/ProductDetail';
import ProductList from './components/pages/ProductList';
import Wish from './components/pages/Wish';
import Cart from './components/pages/Cart';

import './App.css';

function App() {
  const [checker, setChecker] = useState(false);

  useEffect(() => {
    console.log(checker)
  },[checker])

  return (
    <div className='appWrap'>
      <BrowserRouter>
        <Header 
          checker={checker}
          setChecker={setChecker}
        />
        <Routes>
          <Route path='/' element={<Main 
            checker={checker}
            setChecker={setChecker}
          />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wish' element={<Wish />} />
          <Route path='/product' element={<ProductList />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
