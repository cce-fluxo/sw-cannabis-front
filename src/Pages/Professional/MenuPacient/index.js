import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { Card, ContainerBg, CardName, InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import { SubTitle } from './styles';
import Avatar from '../../../Assets/avatar.svg';

export default function MenuPacient(){
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  const newList=[{nome:'Lionel Messi', id:1},{nome:'Cristiano Ronaldo', id:2},{nome:'Lebron James', id:3},{nome:'Allen Iverson', id:4},{nome:'Kyrie Irving', id:5}]
  const path=['/pacientes/menu/info/'+id,'/pacientes/menu/acompanhamento/'+id]
  
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
      <CardName><img src={Avatar}/><br/>
              {newList[id-1].nome}</CardName>
      </Card>
      <Link to={path[0]}><SubTitle>Informações do paciente</SubTitle></Link>
      <Link to={path[1]}><SubTitle>Acompanhamento</SubTitle></Link>
      </InnerContainerBg>
    </ContainerBg>
    
    </>
  )
}