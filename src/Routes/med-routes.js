import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Homepage from '../Pages/Homepage/homepage';

import LoginMade from '../Pages/LoginMade';


export default function MedRoutes(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/login' component={LoginMade}/>
      
      
      </Switch>
    </BrowserRouter>
    </div>
  )
}