import React,{useState} from 'react';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';

import {  ContainerBg, InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer, SubTitle} from '../../../Pages/Professional/Profile/styles';
import {MenuDiv,MenuTitle} from '../../../Pages/Responsavel/MenuPacient/styles';
import {CardName, Card, CardContainer,User,LeftContainer, RightContainer, RightText, CheckContainer, CheckText, Check } from './styles';

export default function Appointment(){
  const [pending,setPending]=useState(true)
  const newList=[{nome:'Lionel Messi',consulta:'24/06/2021, 15:00-16:00' ,id:1},{nome:'Cristiano Ronaldo',consulta:'22/06/2021, 13:00-14:00', id:2},{nome:'Lebron James',consulta:'23/06/2021, 15:00-16:00', id:3},{nome:'Allen Iverson',consulta:'02/06/2021, 10:00-11:00', id:4},{nome:'Kyrie Irving',consulta:'18/06/2021, 12:00-13:00', id:5}]
  
  const pendingList=newList.map(function(item){
    
    return(
      <CardContainer key={item.id.toString()}>
      <Card>
        <LeftContainer>
          <User/>
          <CardName>{item.nome}</CardName>
        </LeftContainer>
        <RightContainer>
          <RightText>Consulta: {item.consulta}</RightText>
          <RightText>Ver informações do paciente</RightText>
          <CheckContainer>
            <Check/>
            <CheckText>Marcar como concluída</CheckText>
          </CheckContainer>
        </RightContainer>
      </Card>
    </CardContainer>
      
    )
  })


  const concludedList=newList.map(function(item){
    
    return(
      <CardContainer key={item.id.toString()}>
      <Card>
        <LeftContainer>
          <User/>
          <CardName>{item.nome}</CardName>
        </LeftContainer>
        <RightContainer>
          <RightText>Consulta: {item.consulta}</RightText>
          <RightText>Ver informações do paciente</RightText>
        </RightContainer>
      </Card>
    </CardContainer>
      
    )
  })

  const changeView=(option)=>{
    setPending(option)
  }

  const noPacients=false
  const NoPacients=()=>{
    return(
      <SubTitle>
        Você ainda não possui nenhum consulta agendada ou realizada. Por favor, aguarde um 
paciente ser atribuído a você.
      </SubTitle>
    )
  }

  const PendingConsults=()=>{
    return(
      <>
      <MenuDiv>
          <MenuTitle active={true}>Pendentes</MenuTitle>
          <MenuTitle onClick={()=>changeView(false)}>Realizadas</MenuTitle>
      </MenuDiv>
      {pendingList}
      </>
    )
  }


  const ConcludedConsults=()=>{
    return(
      <>
      <MenuDiv>
          <MenuTitle onClick={()=>changeView(true)}>Pendentes</MenuTitle>
          <MenuTitle active={true} >Realizadas</MenuTitle>
      </MenuDiv>
      {concludedList}
      </>
    )
  }


  const DisplayCards=()=>{
    return pending?<PendingConsults/>:<ConcludedConsults/>
  }


  

  return(
    <>
    <Head title="Terapeutas Cannábicos - Menu do paciente" description="Descrição do menu do paciente"/>
    <Header/>
    <ContainerBg>
      <TitleContainer>
        <Title active={true}>ACOMPANHAMENTO</Title>
      </TitleContainer>
      <InnerContainerBg>
      {noPacients?<NoPacients/>:<DisplayCards/>}
     
      
      </InnerContainerBg>
    </ContainerBg>
    </>
  )
}