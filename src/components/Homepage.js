import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
  return(
    <div className="jumbotron">
      <h1 className="display-4">Welcome, World!</h1>
      <p className="lead">This is the biggest shopping website, here you can find everything you are looking for.</p>
      <hr className="my-4" />
      <p>If exists we got it! Go ahead and check our products lists.</p>
      <p className="lead">
        <Link to="/shop" className="btn btn-secondary btn-lg">Our Shop</Link>
      </p>
    </div>
  );
}

export default Homepage;