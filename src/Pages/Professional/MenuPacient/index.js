import React,{useEffect,useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { Card, ContainerBg, CardName, InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import { SubTitle } from './styles';
import Avatar from '../../../Assets/avatar.svg';
import AuthContext from '../../../Storage/auth-context';




export default function MenuPacient(){
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  const path=['/pacientes/menu/info/'+id,'/pacientes/menu/acompanhamento/'+id]
  const {getPatientFolder}=useContext(AuthContext)
  const [patients,setPatients]=useState([])
  useEffect(()=>{
    getPatientFolder(localStorage.getItem('ID')).then(setPatients)
    
  },[])
  const patientInfo=patients.find(x=>x.id===id)
 
  return(
    <>
    <Head title="Terapeutas Cannábicos - Menu do paciente" description="Descrição do menu do paciente"/>
    <Header/>
    <ContainerBg>
      <TitleContainer>
        <Title active={true}>PACIENTES</Title>
      </TitleContainer>
      <InnerContainerBg>
      <Return destiny='/pacientes'/>
      <Card>
          <CardName>
              <img src={Avatar}/> <br/>
              {patientInfo?patientInfo.nome:''}    <br/>
              {patientInfo?patientInfo.sobrenome:''}
          </CardName>
      </Card>
      <Link to={path[0]}><SubTitle>Informações do paciente</SubTitle></Link>
      <Link to={path[1]}><SubTitle>Acompanhamento</SubTitle></Link>
      </InnerContainerBg>
    </ContainerBg>
    
    </>
  )
}