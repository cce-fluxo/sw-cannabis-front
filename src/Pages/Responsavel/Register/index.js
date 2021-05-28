import React,{useEffect,useState,useReducer} from 'react';
import Head from '../../../Components/Head';
import Header from '../../../Components/Header';
import {Link} from 'react-router-dom';
import { ArrowDiv, Card, InnerContainerBg, ProfileBg,Return,Title, TitleContainer } from './styles';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import Arrow from '../../../Assets/arrow.svg';
import Upload from '../../../Components/Upload';

export default function Register(){
  
  
  const cpfMask = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

const rgMask = value=>{
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1') 
}

const cepMask = value=>{
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{1,2})/, '$1-$2') 
    .replace(/(-\d{3})\d+?$/, '$1')
}

  return(
    <>
    <Head title='Terapeutas Cannábicos - Registro de novo paciente'/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Link to='/perfil/dados'><Title>DADOS</Title></Link>
        <Link to='/perfil/pacientes'><Title active={true}>PACIENTES</Title></Link>
      </TitleContainer>
      <InnerContainerBg>
        <ArrowDiv><Link to='/perfil/pacientes'><Return src={Arrow}/></Link></ArrowDiv>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse />
        </InputDiv>
        <InputDiv>
          <InputTitle>Data de nascimento:</InputTitle>
          <InputReverse />
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse/>
        </InputDiv>
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse />
        </InputDiv>

        <InputDiv>
          <InputTitle>Envio de identidade:</InputTitle>
          <InputReverse />
        </InputDiv>
        
      </InnerContainerBg>
    </ProfileBg>

    </>
  )
}