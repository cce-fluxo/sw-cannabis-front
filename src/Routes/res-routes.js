import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dados from '../Pages/Responsavel/Dados';
import Homepage from '../Pages/Homepage/homepage';

import LoginMade from '../Pages/LoginMade';
import Profile from '../Pages/Responsavel/Profile';
import Pacients from '../Pages/Responsavel/Pacients';
import Register from '../Pages/Responsavel/Register';
import MenuPacient from '../Pages/Responsavel/MenuPacient';
import Consultas from '../Pages/Responsavel/Consultas';
import Agendamento from '../Pages/Responsavel/Agendamento';
import ProChoice from '../Pages/Responsavel/ProChoiceAgendamento';


export default function ResRoutes(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/login' component={LoginMade}/>
      <Route exact path='/perfil' component={Profile}/>
      <Route exact path='/perfil/dados' component={Dados}/>
      <Route exact path='/perfil/pacientes' component={Pacients}/>
      <Route exact path='/perfil/pacientes/registro' component={Register}/>
      <Route path='/perfil/pacientes/menu' component={MenuPacient}/>
      <Route exact path='/consultas' component={Consultas}/>
      <Route exact path='/consultas/paciente' component={Agendamento}/>
      <Route exact path='/consultas/paciente/agendamento' component={ProChoice}/>
      
      </Switch>
    </BrowserRouter>
    </div>
  )
}