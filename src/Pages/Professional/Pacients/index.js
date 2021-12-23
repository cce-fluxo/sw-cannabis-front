import React, { useContext, useEffect, useState } from 'react';


import { Link } from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';


import { SubTitle, Title, TitleContainer } from '../../../Pages/Professional/Profile/styles';
import { Card, CardContainer, CardName, InnerContainerBg, ContainerBg } from './styles';
import Avatar from '../../../Assets/avatar.svg';
import AuthContext from '../../../Storage/auth-context';
import LoadingIndicator from '../../../Components/LoadingIndicator';

export default function Pacients() {
  const first = false
  const [loading,setLoading]=useState(true)
  const {getPatientFolder}=useContext(AuthContext)
  const [patients,setPatients]=useState([])
  
  useEffect(()=>{
    getPatientFolder(localStorage.getItem('ID')).then(setPatients,
      setTimeout(function() {
        setLoading(false)
      }, 1500)
      )
  },[])
  
  
  const NoPacients = () => {
    return (
      <>
        <SubTitle>Você ainda não possui nenhum consulta agendada ou realizada. Por favor, aguarde um
          paciente ser atribuído a você.</SubTitle>
      </>
    )
  }


  const list = patients?patients.map(function (item) {
    const path = '/pacientes/menu/' + item.id
    return (
      <Link to={path}>
        <Card key={item.id}>
          <CardName>
            <img src={Avatar} alt={item.nome} />
            <br />
            {item.nome}<br />{item.sobrenome}
          </CardName>
        </Card>
      </Link>
    )
  }):''

  const DisplayCards = () => {
    return (
      <CardContainer>
        {list}

      </CardContainer>
    )
  }
  
  return (
    <>
      <Head title="Terapeutas Cannábicos - Menu de pacientes" description="Descrição do menu de pacientes" />
      <Header />
      <ContainerBg>
        <TitleContainer>
          <Title active={true}>PACIENTES</Title>
        </TitleContainer>
        <InnerContainerBg>
          {!patients || loading ? <LoadingIndicator/> : (first ? <NoPacients /> : <DisplayCards />)} 
        </InnerContainerBg>
      </ContainerBg>
    </>
  )
}