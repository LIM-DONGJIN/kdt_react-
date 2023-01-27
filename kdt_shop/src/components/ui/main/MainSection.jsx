import React, { useState, useEffect }  from 'react';
import ProductCard from './ProductCard';
import style from './MainSection.module.css';

function MainSection() {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProductData(data);
    })
    .catch(err => {
      console.error(err);
    })  
  },[]);

  return ( 
    <section className={style.mainSection}>
      {
        productData && productData.map( product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))
      }
    </section>
  );
}

export default MainSection;