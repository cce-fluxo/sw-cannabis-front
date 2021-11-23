import React from 'react';

import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { Button } from '../../../Utils/styles';

import {SubTitle,Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import {Card, CardContainer, CardName, InnerContainerBg, ContainerBg} from './styles';
import Avatar from '../../../Assets/avatar.svg';

export default function Pacients(){
  const first=false
  const NoPacients=()=>{
    return(
      <>
      <SubTitle>Você ainda não possui nenhum consulta agendada ou realizada. Por favor, aguarde um 
paciente ser atribuído a você.</SubTitle>
      </>
    )
  }

  const newList=[{nome:'Joaquim Silva', id:1},{nome:'Cristiano Ronaldo', id:2},{nome:'Lebron James', id:3},{nome:'Allen Iverson', id:4},{nome:'Kyrie Irving', id:5}]
  
  const list=newList.map(function(item){
    const path='/pacientes/menu/'+item.id
    return(
      <Link to={path}>
      <Card key={item.id}>
               <CardName><img src={Avatar}/><br/>
              {item.nome}</CardName>
      </Card>
      </Link>
    )
  })

  const DisplayCards=()=>{
    return(
      <CardContainer>
      {list}
      
      </CardContainer>
    )
  }

  return(
    <>
    <Head title="Terapeutas Cannábicos - Menu de pacientes" description="Descrição do menu de pacientes"/>
    <Header/>
    <ContainerBg>
      <TitleContainer>
        <Title active={true}>PACIENTES</Title>
      </TitleContainer>
      <InnerContainerBg>
        {first?<NoPacients/>:<DisplayCards/>}
        
      </InnerContainerBg>
    </ContainerBg>
    </>
  )
}