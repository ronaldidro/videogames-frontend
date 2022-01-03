import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './core/Home';
import Signin from './core/Signin';
import Signup from './core/Signup';
import AddCategory from './core/AddCategory';
import AddVideogame from './core/AddVideogame';
import Videogame from './core/Videogame';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/addcategory" exact component={AddCategory} />
        <Route path="/addvideogame" exact component={AddVideogame} />
        <Route path="/videogame/:videogameId" exact component={Videogame} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;