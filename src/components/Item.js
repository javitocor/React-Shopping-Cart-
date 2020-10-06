import React, { useEffect, useState } from 'react';

const Item = (props) => {
  const {product, addCart} = props;

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);    
  }, [addCart]);

  const increment =()=>{
    setCount(count + 1);
  }

  const decrement =()=>{
    setCount(count - 1);
  }
  
  const handleChange = (e) => {
    setCount(e.target.value)
  }

  return (
    <div className="col-3"><div className="card">
            <img className="card-img-top" src={product.image} alt="Product pic"/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">This is a unique product, only in our website. Enjoy the amazing discount.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Only: {product.price} $</li>
            </ul>
            <div className="card-body text-center">
              <div className="d-flex justify-content-start mb-2 w-75 mx-auto">
                <button onClick={decrement} className="btn btn-secondary btn-sm">-</button>
                <div className="mx-2"><input style={{width:"100%", margin:"auto"}} type="number" value={count} onChange={handleChange}></input></div>
                <button onClick={increment} className="btn btn-secondary btn-sm">+</button>
              </div>
              <button onClick={()=>addCart(product.name, product.price, count)} className="btn btn-primary btn-sm">Add to Cart</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          </div>
  )
}

export default Item;