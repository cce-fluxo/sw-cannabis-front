import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Homepage from '../Pages/Homepage/homepage';
import Login from '../Pages/Login/index';
import Register from '../Pages/Register';



export default function OffRoutes(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/cadastro' component={Register}/>
      </Switch>
    </BrowserRouter>
    </div>
  )
}