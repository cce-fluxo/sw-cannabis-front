import React from 'react';
import Header from '../../Components/Header';
import {LoginBg} from './styles';


export default function LoginMade(){

  return(
    <>
    <Header/>
    <LoginBg>
      <h1 style={{'marginTop':'10%','color':'white'}}> Login realizado com sucesso </h1>
    </LoginBg>
    </>
  )
}