import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { Card, ContainerBg, CardName, InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import { SubTitle } from '../MenuPacient/styles';
import Avatar from '../../../Assets/avatar.svg';

export default function FollowUp(){
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  const newList=[{nome:'Joaquim Silva', id:1},{nome:'Cristiano Ronaldo', id:2},{nome:'Lebron James', id:3},{nome:'Allen Iverson', id:4},{nome:'Kyrie Irving', id:5}]
  const path=['/pacientes/menu/acompanhamento/notas/'+id,'/pacientes/menu/'+id,'/pacientes/menu/acompanhamento/fichas/'+id,`/pacientes/${id}/acompanhamento/enviar-ficha/`]
  return(
    <>
    <Head title="Terapeutas Cannábicos - Acompanhamento do paciente" description="Descrição do menu do paciente"/>
    <Header/>
    <ContainerBg>
      <TitleContainer>
        <Title active={true}>ACOMPANHAMENTO</Title>
      </TitleContainer>
      <InnerContainerBg>
      <Return destiny={path[1]}/>
      <Card>
      <CardName><img src={Avatar} alt="user"/><br/>
              {newList[id-1].nome}</CardName>
      </Card>
      <Link to={path[0]}><SubTitle>Anotações</SubTitle></Link>
      <Link to={path[2]}><SubTitle>Fichas de acompanhamento</SubTitle></Link>
      </InnerContainerBg>
    </ContainerBg>
    
    </>
  )
}