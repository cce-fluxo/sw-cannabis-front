import React from 'react';
import Head from '../../../Components/Head';
import Header from '../../../Components/Header';
import {Link} from 'react-router-dom';
import { ArrowDiv, Card, CardContainer, CardName, InnerContainerBg, ProfileBg,Return,Title, TitleContainer } from './styles';
import Arrow from '../../../Assets/arrow.svg';
import Plus from '../../../Assets/plus.svg';
import Avatar from '../../../Assets/avatar.svg';

export default function Pacients(){
  const pacientes = [
    {name:'Igor Godinho'},
    {name:'Camila Maia'},
    {name:'Paulo Melo'}
  ]

  const first=false
  const renderCard = pacientes.map((item,index)=>{
    return(
      <>
        
        <Link to='/perfil/pacientes/menu'><Card key={index}>
          <CardName><img src={Avatar}/><br/>
          {item.name}</CardName>
        </Card></Link>
      
      </>
    )
  })

  const DisplayCards=()=>{
    return(
      <CardContainer>
        {renderCard}
        <Link to='/perfil/pacientes/registro'><Card><img src={Plus} alt='Registrar paciente'/></Card></Link>
      </CardContainer>
    )
  }

  const FirstTime = () =>{
    return(
      <>
        
        <p>Nenhum paciente registrado. Gostaria de registrar um paciente?</p><br/>
        <Link to='/perfil/pacientes/registro'><Card><img src={Plus} alt='Registrar paciente'/></Card></Link>
      </>
    )   
  }

  return(

    <>
    <Head title="Terapeutas Cannábicos - Pacientes registrados" description="Descrição do pacientes"/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Link to='/perfil/dados'><Title>DADOS</Title></Link>
        <Title active={true}>PACIENTES</Title>
      </TitleContainer>
      <InnerContainerBg>
        <ArrowDiv><Link to='/perfil'><Return src={Arrow}/></Link></ArrowDiv>
        {first?<FirstTime/>:<DisplayCards/>}
      </InnerContainerBg>  
      
    </ProfileBg>
    

    
    </>
  )
}