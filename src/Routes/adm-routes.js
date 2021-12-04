import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Aprovar from '../Pages/Admin/Aprovar';
import Cadastros from '../Pages/Admin/Cadastros';
import CreateForm from '../Pages/Admin/CreateForm';
import { Forms } from '../Pages/Admin/Forms';
import Homepage from '../Pages/Homepage/';

import LoginMade from '../Pages/LoginMade';



export default function AdmRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={LoginMade} />
          <Route exact path='/cadastros' component={Cadastros} />
          <Route exact path='/cadastros/aprovar' component={Aprovar} />
          <Route exact path="/formularios" component={Forms} />
          <Route exact path="/criar-formulario/:category" component={CreateForm} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}