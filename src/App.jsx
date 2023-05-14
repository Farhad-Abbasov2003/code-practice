import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Card } from 'antd';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("")
  
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='Cards'>
      <h1>Products</h1>
      <div className='map'>
        {products.map(product => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={product.image} />}
          >
            <p>{product.title}</p>
            <p>{product.price} AZN</p>
            <p>{product.category}</p>
            <button>Add to cart</button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
