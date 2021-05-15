import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import UserType from '../../Components/UserType';
import {Title} from '../../Utils/styles';
import { RegisterBg,Return, TitleContainer,ArrowDiv} from './styles';
import Arrow from '../../Assets/arrow.svg';

export default function Register(){
  


  return(
    <>
    <Header/>
    <RegisterBg>
      <TitleContainer>
        <ArrowDiv>
          <Link to='/login' style={{ textDecoration: 'none'}}><Return src={Arrow}/></Link>
        </ArrowDiv>
        <Title>CADASTRO</Title>
      </TitleContainer>
      <UserType/>
    </RegisterBg>
    </>
  )
}