import React,{useContext,useState} from 'react';
import Head from '../../../Components/Head';
import Header from '../../../Components/Header';
import Return from '../../../Components/Return';
import AuthContext from '../../../Storage/auth-context';
import {Link} from 'react-router-dom';
import {Card, CardName, InnerContainerBg, ProfileBg,Title, TitleContainer } from './styles';

import Plus from '../../../Assets/plus.svg';
import Avatar from '../../../Assets/avatar.svg';

export default function Pacients(){
  
  const {userInfo,onDataChange,pacients} = useContext(AuthContext) 
  const noPacients=pacients.length===0?true:false

  const FirstTime = () =>{
    return(
      <>
        
        <p>Nenhum paciente registrado. Gostaria de registrar um paciente?</p><br/>
        <Link to='/perfil/pacientes/registro'><Card><img src={Plus} alt='Registrar paciente'/></Card></Link>
      </>
    )   
  }
  
  let newList=[]
  for (var i = 0; i < pacients.length; i++) { newList.push(pacients[i]); }

  //console.log(test)  
  
  const list=newList.map(function(item){
    const path='/perfil/pacientes/menu/'+item.id
    return(
      <Link to={path} key={item.id}>
      <Card>
               <CardName><img src={Avatar} alt={item.nome}/><br/>
              {item.nome}</CardName>
      </Card>
      </Link>
    )
  })

  const DisplayCards=()=>{
    return(
      <>
      {list}
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
        <Return destiny='/perfil'/>
        {noPacients?<FirstTime/>:<DisplayCards/>}
        
      </InnerContainerBg>  
      
    </ProfileBg>
    

    
    </>
  )
}
//{firstTime?<FirstTime/>:renderPacients}
