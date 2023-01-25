import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/pages/Main';
import ProductDetail from './components/pages/ProductDetail';
import ProductList from './components/pages/ProductList';
import Wish from './components/pages/Wish';
import Cart from './components/pages/Cart';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main />} />
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
