import React,{useEffect,useState,useContext} from 'react';import Head from '../../../Components/Head';
import Header from '../../../Components/Header';
import Return from '../../../Components/Return';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import {  ContainerBg,InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import AuthContext from '../../../Storage/auth-context';


export default function InfoPacient(){
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  const path='/pacientes/menu/'+id
  const {getPatientFolder}=useContext(AuthContext)
  const [patients,setPatients]=useState([])
  useEffect(()=>{
    getPatientFolder(localStorage.getItem('ID')).then(setPatients)
    
  },[])
  const patientInfo=patients.find(x=>x.id===id) 
  console.log(patientInfo) 
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
          <InputReverse disabled value={patientInfo?patientInfo.nome:''}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled value={patientInfo?patientInfo.sobrenome:''}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Data de nascimento:</InputTitle>
          <InputReverse disabled value={patientInfo?patientInfo.data_nascimento:''}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse disabled value={patientInfo?patientInfo.cpf:''}/>
        </InputDiv>
        
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse disabled value={patientInfo?patientInfo.rg:''}/>
        </InputDiv>
        <h1>envio de id</h1>
        
        <InputDiv>
          <InputTitle>Diagnóstico:</InputTitle>
          <InputReverse disabled value={patientInfo?patientInfo.diagnostico:''}/>
        </InputDiv>
        <h1>laudo medico</h1>
        <h1>receita</h1>
       
        <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse disabled value={patientInfo?patientInfo.cidade:''}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse disabled value={patientInfo?patientInfo.estado:''}/>
          </InputDiv>  
        
        <InputDiv>
          <InputTitle>CEP:</InputTitle>
          <InputReverse disabled value={patientInfo?patientInfo.cep:''}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Endereço:</InputTitle>
          <InputReverse disabled value={patientInfo?patientInfo.endereco:''}/>
        </InputDiv>
        <InputDiv>
            <InputTitle>Número:</InputTitle>
            <InputReverse disabled value={patientInfo?patientInfo.numero:''}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse  disabled value={patientInfo?patientInfo.complemento:''}/>
          </InputDiv>
          
          </InnerContainerBg>
          </ContainerBg>
    </>
  )
}