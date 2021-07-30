import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Aprovar from '../Pages/Admin/Aprovar';
import Cadastros from '../Pages/Admin/Cadastros';
import Homepage from '../Pages/Homepage/homepage';

import LoginMade from '../Pages/LoginMade';


export default function AdmRoutes(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/login' component={LoginMade}/>
      <Route exact path='/cadastros' component={Cadastros}/>
      <Route exact path='/cadastros/aprovar' component={Aprovar}/>
      
      </Switch>
    </BrowserRouter>
    </div>
  )
}