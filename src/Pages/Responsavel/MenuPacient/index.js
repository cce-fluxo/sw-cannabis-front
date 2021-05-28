import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Arrow from '../../../Assets/arrow.svg';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import { ArrowDiv,  Checkbox,  CheckDiv,  CheckTitle,  InnerContainerBg, MenuDiv, MenuTitle, ProfileBg,Return,Title, TitleContainer } from './styles';
import {InputContainer} from '../Dados/styles';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';

export default function MenuPacient(){
  const [test,setTest]=useState('')
  const teste = () => {
    if (document.querySelector('#adress').checked){
      setTest('endereço')
    }
    else{
      setTest('')
    }
  }
  
  
  return(
    <>
    <Header/>
    <Head title="Terapeutas Cannábicos - Perfil do paciente" description="Descrição do pacientes"/>
    <ProfileBg>
      <TitleContainer>
        <Link to='/perfil/dados'><Title>DADOS</Title></Link>
        <Title active={true}>PACIENTES</Title>
      </TitleContainer>
      <InnerContainerBg>
        <ArrowDiv><Link to='/perfil/pacientes'><Return src={Arrow}/></Link></ArrowDiv>
        <MenuDiv>
          <MenuTitle active={true}>Dados</MenuTitle>
          <MenuTitle>Fichas</MenuTitle>
          <MenuTitle>Pesquisas</MenuTitle>
        </MenuDiv>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse disabled placeholder=''/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled placeholder='Godinho Souza Braga'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Data de nascimento:</InputTitle>
          <InputReverse disabled placeholder=''/>
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <h1>envio de id</h1>
        <InputDiv>
          <InputTitle>Diagnóstico:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <h1>laudo medico</h1>
        <h1>receita</h1>
        <CheckDiv>
          <CheckTitle>Gostaria de utilizar os dados <br/>residenciais do responsável?</CheckTitle>
          <Checkbox type='checkbox' id='adress' value='endereço' onClick={teste}/>
        </CheckDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse style={{'width':'300px'}} placeholder={test}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse style={{'width':'100px'}} placeholder={test}/>
          </InputDiv>
        </InputContainer>
        <InputDiv>
          <InputTitle>Endereço:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Número:</InputTitle>
            <InputReverse style={{'width':'100px'}} placeholder=''/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse style={{'width':'300px'}} placeholder=''/>
          </InputDiv>
        </InputContainer>

      </InnerContainerBg>  
      
    </ProfileBg>
    </>
  )
}