import React,{useContext} from 'react';
import Header from '../../../Components/Header';
import { Card, CardContainer, CardName, ContainerBg,ContainerTitle,InnerContainerBg,Title } from './styles';
import Avatar from '../../../Assets/avatar.svg';
import {Link} from 'react-router-dom';
import AuthContext from '../../../Storage/auth-context';
import {Button} from '../../../Utils/styles';



export default function Consultas(){
  

  const {pacients} = useContext(AuthContext) 
  const noPacients=pacients.length===0?true:false

  
  let newList=[]
  for (var i = 0; i < pacients.length; i++) { newList.push(pacients[i]); }
  console.log(newList)
  

  //console.log(test)  
  
  const list=newList.map(function(item){
    const path='/consultas/paciente/'+item.id
    return(
      <Link to={path} key={item.id.toString()}>
      <Card>
               <CardName><img src={Avatar}/><br/>
              {item.nome}</CardName>
      </Card></Link>
    )
  })
  

  

  const FirstTime=()=>{
    return(
      <>
      <ContainerTitle>Ainda não há pacientes cadastrados nesse perfil.</ContainerTitle>
      <ContainerTitle>Clique no botão abaixo para ser redirecionado à página de criação de paciente.</ContainerTitle>
      <Link to='/perfil/pacientes/registro'><Button>CADASTRAR PACIENTE</Button></Link>
      </>
    )

  }

  const DisplayPacients=()=>{
    return(
      <>
      <ContainerTitle>Selecione um paciente para agendar uma consulta.</ContainerTitle>
      <CardContainer>{list}</CardContainer>
      </>
    )
  }


  return(
    <>
    <Header/>
    <ContainerBg>
      <Title>CONSULTAS</Title>
      <InnerContainerBg>
     
     {noPacients?<FirstTime/>:<DisplayPacients/>} 
      </InnerContainerBg>
    </ContainerBg>
   
    </>
  )
}