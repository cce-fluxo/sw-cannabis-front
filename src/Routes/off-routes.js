import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Pages/Login/index';
import Register from '../Pages/Register';



export default function OffRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' >
            <Redirect to='/login' />
          </Route>
          <Route exact path='/login' component={Login} />
          <Route exact path='/cadastro' component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}