import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import { InnerContainerBg,ContainerBg,Title, ContainerTitle } from '../Consultas/styles';
import Return from '../../../Components/Return';
import {Button} from '../../../Utils/styles';
 
export default function Agendamento(){
  const First=()=>{
    return(
      <>
      <ContainerTitle>O paciente (nome) ainda não possui nenhuma consulta. Gostaria de agendar uma consulta?</ContainerTitle>
      <Link to='paciente/agendamento'><Button>AGENDAR</Button></Link>
      </>
    )
  }
  return(
    <>
    <Header/>
    <ContainerBg>
      <Title>CONSULTAS</Title>
      <InnerContainerBg>
      <Return destiny='/consultas'/>
      <First/>
      </InnerContainerBg>
    </ContainerBg>
    </>
  )
}