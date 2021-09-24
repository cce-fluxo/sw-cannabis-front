import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import { InnerContainerBg,ContainerBg,Title, ContainerTitle } from '../Consultas/styles';
import Return from '../../../Components/Return';
import {Button} from '../../../Utils/styles';
import AuthContext from '../../../Storage/auth-context';
 
export default function Agendamento(){
  
  const ctx=useContext(AuthContext)
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  console.log(id)
  //const {id}=useParams(id)
  const pacientArray=ctx.pacients.filter(x=>x.id===id)
  console.log(pacientArray)
  const pacient=pacientArray[0]
  console.log(pacient)
  const First=()=>{
    const rota='/consultas/paciente/agendamento/'+id
    return(
      <>
      <ContainerTitle>O paciente {pacient.nome} ainda não possui nenhuma consulta. Gostaria de agendar uma consulta?</ContainerTitle>
      <Link to={rota}><Button>AGENDAR</Button></Link>
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