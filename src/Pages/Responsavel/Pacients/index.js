import React,{useContext} from 'react';
import Head from '../../../Components/Head';
import Header from '../../../Components/Header';
import Return from '../../../Components/Return';
import AuthContext from '../../../Storage/auth-context';
import {Link} from 'react-router-dom';
import {Card, CardContainer, CardName, InnerContainerBg, ProfileBg,Title, TitleContainer } from './styles';
import api from '../../../Services/api';

import Plus from '../../../Assets/plus.svg';
import Avatar from '../../../Assets/avatar.svg';

export default function Pacients(){
  
  
 
  const {userInfo,onDataChange,pacients} = useContext(AuthContext) 
  console.log(Object.values(pacients))
  //const pacientList=userInfo.paciente
  
  const listagemPacientes=JSON.parse(localStorage.getItem('Pacientes'));
  console.log(listagemPacientes)
  //console.log(window.localStorage.getItem('Pacientes'))

  if(pacients.lenght===0){
    var first=true
  }
  if (!first){
    var renderCards=''
  }else{
     
     renderCards = listagemPacientes.map((item)=>{
        console.log(item)
        const adress='/perfil/pacientes/menu/'+item.id
        return(
          <>
            
            <Link to={adress}><Card key={item.id}>
              <CardName><img src={Avatar}/><br/>
              {item.nome}</CardName>
            </Card></Link>
          
          </>
        )
      })
  }

  if(window.localStorage.getItem('Pacientes')===null || window.localStorage.getItem('Pacientes')==='[]'){
    var first=true
  }
  if (first){
    var renderCard=''
  }else{
    
     renderCard = listagemPacientes.map((item,index)=>{
        //var cpf=item.cpf
        const adress='/perfil/pacientes/menu/'+item.cpf
        return(
          <>
            
            <Link to={adress}><Card key={index}>
              <CardName><img src={Avatar}/><br/>
              {item.nome}</CardName>
            </Card></Link>
          
          </>
        )
      })
  }
  

  const DisplayCards=()=>{
    return(
      <CardContainer>
        {renderCard}
        {renderCards}
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
        <Return destiny='/perfil'/>
        {first?<FirstTime/>:<DisplayCards/>}
      </InnerContainerBg>  
      
    </ProfileBg>
    

    
    </>
  )
}