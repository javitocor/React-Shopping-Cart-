import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from './Homepage'
import Navbar from './Navbar'
import Shop from './Shop'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
