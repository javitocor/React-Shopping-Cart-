import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage'
import Navbar from './Navbar'
import Shop from './Shop'

function App() {
  return (
    <Router>
      <Switch>
      <>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </>        
      </Switch>
    </Router>
  );
}

export default App;
