import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import UserType from '../../Components/UserType';
import Return from '../../Components/Return';
import {Title} from '../../Utils/styles';
import { RegisterBg,TitleContainer} from './styles';


export default function Register(){
  


  return(
    <>
    <Header/>
    <RegisterBg>
      <TitleContainer>
        <Return destiny='/login'/>
        <Title style={{'margin-top':'0px'}}>CADASTRO</Title>
      </TitleContainer>
      <UserType/>
    </RegisterBg>
    </>
  )
}