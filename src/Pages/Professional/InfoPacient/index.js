import React from 'react';
import Head from '../../../Components/Head';
import Header from '../../../Components/Header';
import Return from '../../../Components/Return';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import {  ContainerBg,InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';

export default function InfoPacient(){
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))

  const newList=[{nome:'Lionel Messi', id:1},{nome:'Cristiano Ronaldo', id:2},{nome:'Lebron James', id:3},{nome:'Allen Iverson', id:4},{nome:'Kyrie Irving', id:5}]
  const path='/pacientes/menu/'+id
  return(
    <>
    <Head title='Terapeutas Cannábicos - Informações do paciente'/>
    <Header/>
    <ContainerBg>
      <TitleContainer>
        <Title active={true}>PACIENTES</Title>
      </TitleContainer>
      <InnerContainerBg>
      <Return destiny={path}/>
    <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse />
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
          <InputReverse />
        </InputDiv>
        
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse />
        </InputDiv>
        <h1>envio de id</h1>
        
        <InputDiv>
          <InputTitle>Diagnóstico:</InputTitle>
          <InputReverse />
        </InputDiv>
        <h1>laudo medico</h1>
        <h1>receita</h1>
       
        <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse />
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse />
          </InputDiv>  
        
        <InputDiv>
          <InputTitle>CEP:</InputTitle>
          <InputReverse />
        </InputDiv>
        <InputDiv>
          <InputTitle>Endereço:</InputTitle>
          <InputReverse />
        </InputDiv>
        <InputDiv>
            <InputTitle>Número:</InputTitle>
            <InputReverse/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse  />
          </InputDiv>
          </InnerContainerBg>
          </ContainerBg>
    </>
  )
}