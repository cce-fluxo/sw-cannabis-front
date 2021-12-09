import React,{useState,useContext,useEffect} from 'react';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import { Link } from 'react-router-dom';
import {  ContainerBg, InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer, SubTitle} from '../../../Pages/Professional/Profile/styles';
import {MenuDiv,MenuTitle} from '../../../Pages/Responsavel/MenuPacient/styles';
import {CardName, Card, CardContainer,User,LeftContainer, RightContainer, RightText, CheckContainer, CheckText, Check } from './styles';
import AuthContext from '../../../Storage/auth-context';

export default function Appointment(){
  const [pending,setPending]=useState(true)
  const {getPatientFolder}=useContext(AuthContext)
  const [patients,setPatients]=useState([])
  useEffect(()=>{
    getPatientFolder(localStorage.getItem('ID')).then(setPatients)
    console.log(patients)
  },[])
  const pendingList=patients.map(function(item){
  const path=`/pacientes/menu/info/${item.id}`
    return(
      <CardContainer key={item.id.toString()}>
      <Card>
        <LeftContainer>
          <User/>
          <CardName>{item.nome}</CardName>
        </LeftContainer>
        <RightContainer>
          <RightText>Consulta: {item.consulta}</RightText>
          <Link to={path} target="_blank"><RightText>Ver informações do paciente</RightText></Link>
          <CheckContainer>
            <Check/>
            <CheckText>Marcar como concluída</CheckText>
          </CheckContainer>
        </RightContainer>
      </Card>
    </CardContainer>
      
    )
  })


  const concludedList=patients.map(function(item){
    const path=`/pacientes/menu/info/${item.id}`
    return(
      <CardContainer key={item.id.toString()}>
      <Card>
        <LeftContainer>
          <User/>
          <CardName>{item.nome}</CardName>
        </LeftContainer>
        <RightContainer>
          <RightText>Consulta: {item.consulta}</RightText>
          <Link to={path}target="_blank"><RightText>Ver informações do paciente</RightText></Link>
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