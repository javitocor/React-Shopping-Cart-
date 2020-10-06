import React, { useState, useEffect } from 'react';
import products from '../products';
import Item from './Item';

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addCart = (name, price, number) => {
    let totalPrice = price * number;
    let element = {
      name: name,
      total: totalPrice,
      priceXunit: price,
      units: number,
    };
    setCart([...cart, element]);    
  }

  return(
    <div>
      <div className="bg-info d-flex justify-content-end">
        <div className="p-2">Your Cart: {cart.length}</div>
      </div>
      <div className="d-flex flex-column">
        <h3 className="text-uppercase text-center">Products</h3>
        <div className="card-group">
        {products.map(product=>{
          return <Item product={product} addCart={addCart}/>
        })}
        </div>
      </div>
    </div>
  );
}

export default Shop;