import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import UserType from '../../Components/UserType';
<<<<<<< HEAD
import {Title} from '../../Utils/styles';
import { RegisterBg,Return, TitleContainer,ArrowDiv} from './styles';
import Arrow from '../../Assets/arrow.svg';
=======
import Return from '../../Components/Return';
import {Title} from '../../Utils/styles';
import { RegisterBg,TitleContainer} from './styles';

>>>>>>> carrinho

export default function Register(){
  


  return(
    <>
    <Header/>
    <RegisterBg>
      <TitleContainer>
<<<<<<< HEAD
        <ArrowDiv>
          <Link to='/login' style={{ textDecoration: 'none'}}><Return src={Arrow}/></Link>
        </ArrowDiv>
=======
        <Return destiny='/login'/>
>>>>>>> carrinho
        <Title style={{'margin-top':'0px'}}>CADASTRO</Title>
      </TitleContainer>
      <UserType/>
    </RegisterBg>
    </>
  )
}