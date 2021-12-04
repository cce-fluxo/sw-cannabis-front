import React,{useState} from 'react';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';

import {  ContainerBg, InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer, SubTitle} from '../../../Pages/Professional/Profile/styles';
import {MenuDiv,MenuTitle} from '../../../Pages/Responsavel/MenuPacient/styles';
import Return from '../../../Components/Return';


export default function FormMenu(){
  const [pending,setPending]=useState(true)
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  const path='/pacientes/menu/acompanhamento/'+id
  const changeView=(option)=>{
    setPending(option)
  }

  
  

  const PendingForms=()=>{
    return(
      <>
      <MenuDiv>
          <MenuTitle active={true}>Enviadas</MenuTitle>
          <MenuTitle onClick={()=>changeView(false)}>Respondidas</MenuTitle>
      </MenuDiv>
      
      </>
    )
  }


  const ConcludedForms=()=>{
    return(
      <>
      <MenuDiv>
          <MenuTitle onClick={()=>changeView(true)}>Enviadas</MenuTitle>
          <MenuTitle active={true} >Respondidas</MenuTitle>
      </MenuDiv>
      
      </>
    )
  }


  const DisplayCards=()=>{
    return pending?<PendingForms/>:<ConcludedForms/>
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
        <Return destiny={path}/>
      <DisplayCards/>
     
      
      </InnerContainerBg>
    </ContainerBg>
    </>
  )
}