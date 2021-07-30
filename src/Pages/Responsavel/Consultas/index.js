import React from 'react';
import Header from '../../../Components/Header';
import { Card, CardContainer, CardName, ContainerBg,ContainerTitle,InnerContainerBg,Title } from './styles';
import Avatar from '../../../Assets/avatar.svg';
import {Link} from 'react-router-dom';

export default function Consultas(){
  const noPacient=false;

  const pacientes = [
    {name:'Igor Godinho'},
    {name:'Camila Maia'},
    {name:'Paulo Melo'}
  ]
  const renderCard = pacientes.map((item,index)=>{
    return(
      <>
        
        <Link to='/consultas/paciente'><Card key={index}>
          <CardName><img src={Avatar}/><br/>
          {item.name}</CardName>
        </Card></Link>
      
      </>
    )
  })

  const DisplayCards=()=>{
    return(
      <>
      <ContainerTitle>Selecione um paciente para marcar o agendamento</ContainerTitle>
      <CardContainer>
        {renderCard}
      </CardContainer>
      </>
    )
  }

  const CreatePacient=()=>{
    return(
      <>
      <ContainerTitle>Ainda não há pacientes cadastrados nesse perfil</ContainerTitle>
      </>
    )

  }



  return(
    <>
    <Header/>
    <ContainerBg>
      <Title>CONSULTAS</Title>
      <InnerContainerBg>
     {noPacient?<CreatePacient/>:<DisplayCards/>} 
      </InnerContainerBg>
    </ContainerBg>
   
    </>
  )
}