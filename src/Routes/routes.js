import React, { useContext } from 'react';

import AuthContext from '../Storage/auth-context';
import OffRoutes from './off-routes';
import MedRoutes from './med-routes';
import ResRoutes from './res-routes';
import AdmRoutes from './adm-routes';



export default function Routes(){

  const {isLoggedIn,user} =useContext(AuthContext);
  const loggedResp = isLoggedIn&&user==='responsavel'
  const loggedMed = isLoggedIn&&user==='medico'
  const loggedAdm=isLoggedIn&&user==='administrador'

  const Check = ()=>{
    if(loggedResp){
      return(<ResRoutes/>)
    }
    else if(loggedMed){
      return(<MedRoutes/>)
    }
    else if(loggedAdm){
      return(<AdmRoutes/>)
    }
    else{
      return(<OffRoutes/>)
    }
  }

  return(
    <>
    <Check/>
    </>
  )
}