import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Return from '../../../Components/Return';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import { ButtonDiv,  Checkbox,  CheckDiv,  CheckTitle,  InnerContainerBg, MenuDiv, MenuTitle, ProfileBg,Title, TitleContainer,ModalDiv,WindowText,WindowTitle } from './styles';
import {InputContainer} from '../Dados/styles';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import { ButtonSmall } from '../../../Utils/styles';
import Modal from '../../../Components/Modal';

export default function MenuPacient(){
  const [window,setWindow]=useState(false)
  const [test,setTest]=useState('')
  const teste = () => {
    if (document.querySelector('#adress').checked){
      setTest('endereço')
    }
    else{
      setTest('')
    }
  }

  const showWindow=()=>{
    setWindow(true)
  }
  const exclusão = () =>{
    return(
      <Modal onClose={() => setWindow(false)}>
          <ModalDiv>
            <WindowTitle>Excluir Paciente</WindowTitle>
            <WindowText>ATENÇÃO: A exclusão de paciente é permanente. Tem certeza que deseja excluir esse paciente do seu perfil?</WindowText>
            <Link to='/perfil/pacientes'><ButtonSmall>Excluir</ButtonSmall></Link>
          </ModalDiv>
      </Modal>   
 ) 
}
  
  return(
    <>
    <Header/>
    <Head title="Terapeutas Cannábicos - Perfil do paciente" description="Descrição do pacientes"/>
    <ProfileBg>
      {window?exclusão():null}
      <TitleContainer>
        <Link to='/perfil/dados'><Title>DADOS</Title></Link>
        <Title active={true}>PACIENTES</Title>
      </TitleContainer>
      <InnerContainerBg>

        <Return destiny='/perfil/pacientes'/>
        <MenuDiv>
          <MenuTitle active={true}>Dados</MenuTitle>
          <MenuTitle>Pesquisas</MenuTitle>
          <MenuTitle>Fichas</MenuTitle>
        </MenuDiv>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse disabled placeholder='Igor'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled placeholder='Godinho Souza Braga'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Data de nascimento:</InputTitle>
          <InputReverse disabled placeholder='30/11/2000'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse disabled placeholder='000.000.000-00'/>
        </InputDiv>
        
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse disabled placeholder='00.000.000-0'/>
        </InputDiv>
        <h1>envio de id</h1>
        <InputDiv>
          <InputTitle>Diagnóstico:</InputTitle>
          <InputReverse placeholder=''/>
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
          <InputReverse autoComplete='off' placeholder={test}/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Número:</InputTitle>
            <InputReverse style={{'width':'100px'}} placeholder={test}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse style={{'width':'300px'}} placeholder={test}/>
          </InputDiv>
        </InputContainer>
        <ButtonDiv>
          <ButtonSmall color='green'>Salvar</ButtonSmall>
          <span style={{'width':'20px'}}></span>
          <ButtonSmall onClick={showWindow}>Excluir</ButtonSmall>
        </ButtonDiv>
      </InnerContainerBg>  
      
    </ProfileBg>
    </>
  )
}