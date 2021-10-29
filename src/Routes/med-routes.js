import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Homepage from '../Pages/Homepage/homepage';

import LoginMade from '../Pages/LoginMade';
import Appointment from '../Pages/Professional/Appointment';

import Profile from '../Pages/Professional/Profile';
import ProfileData from '../Pages/Professional/ProfileData';
import Calendar from '../Pages/Professional/Calendar';
import Pacients from '../Pages/Professional/Pacients';
import MenuPacient from '../Pages/Professional/MenuPacient';
import InfoPacient from '../Pages/Professional/InfoPacient';
import FollowUp from '../Pages/Professional/FollowUp';
import MenuNotes from '../Pages/Professional/MenuNotes';
import CreateNote from '../Pages/Professional/CreateNote';
import SeeNote from '../Pages/Professional/SeeNote';
import FormMenu from '../Pages/Professional/FormMenu';
import CreateForm from '../Pages/Professional/CreateForm';

export default function MedRoutes(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/login' component={LoginMade}/>
      <Route exact path='/perfil' component={Profile}/>
      <Route exact path='/perfil/dados' component={ProfileData}/>
      <Route exact path='/perfil/calendario' component={Calendar}/>
      <Route exact path='/consultas' component={Appointment}/>
      <Route exact path='/pacientes' component={Pacients}/>
      <Route exact path='/pacientes/menu/:id' component={MenuPacient}/>
      <Route exact path='/pacientes/menu/info/:id' component={InfoPacient}/>
      <Route exact path='/pacientes/menu/acompanhamento/:id' component={FollowUp}/>
      <Route exact path='/pacientes/menu/acompanhamento/notas/:id' component={MenuNotes}/>
      <Route exact path='/pacientes/menu/acompanhamento/criar-nota/:id' component={CreateNote}/>
      <Route exact path='/pacientes/menu/acompanhamento/ver-nota/:id' component={SeeNote}/>
      <Route exact path='/pacientes/menu/acompanhamento/fichas/:id' component={FormMenu}/>
      <Route exact path='/pacientes/menu/acompanhamento/criar-ficha/:id' component={CreateForm}/>
      </Switch>
    </BrowserRouter>
    </div>
  )
}