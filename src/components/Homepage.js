import React from 'react';

const Homepage = () => {
  return(
    <div className="jumbotron">
      <h1 className="display-4">Welcome, World!</h1>
      <p className="lead">This is the biggest shopping website, here you can find everything you are looking for.</p>
      <hr className="my-4" />
      <p>If exists we got it! Go ahead and check our products lists.</p>
      <p className="lead">
        <a className="btn btn-secondary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  );
}

export default Homepage;