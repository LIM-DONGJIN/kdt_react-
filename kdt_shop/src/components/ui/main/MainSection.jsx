import React, { useState, useEffect }  from 'react';
import ProductCard from './ProductCard';
import style from './MainSection.module.css';

function MainSection() {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProductData(data.products);
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