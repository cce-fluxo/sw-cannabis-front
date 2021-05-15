import React, { useContext } from 'react';

import AuthContext from '../Storage/auth-context';
import OffRoutes from './off-routes';
import MedRoutes from './med-routes';


export default function Routes(){
  const {isLoggedIn} =useContext(AuthContext);
  return(
    isLoggedIn?<MedRoutes/>:<OffRoutes/>
  )
}