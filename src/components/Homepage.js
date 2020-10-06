import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
  return(
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Welcome, World!</h1>
        <p className="lead">This is the biggest shopping website, here you can find everything you are looking for.</p>
        <hr className="my-4" />
        <p>If exists we got it! Go ahead and check our products lists.</p>
        <p className="lead">
          <Link to="/shop" className="btn btn-secondary btn-lg">Our Shop</Link>
        </p>
      </div>
      <div>
      <div className="row" style={{width:"100%", margin:"auto"}}>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" >
              <img src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Lights" style={{width:"100%", height: "235px"}} />
              <div className="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
              <img src="https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Nature" style={{width:"100%", height: "235px"}}/>
              <div className="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="https://images.unsplash.com/photo-1583634852966-130c15654305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
              <img src="https://images.unsplash.com/photo-1583634852966-130c15654305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Fjords" style={{width:"100%", height: "235px"}}/>
              <div className="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Homepage;