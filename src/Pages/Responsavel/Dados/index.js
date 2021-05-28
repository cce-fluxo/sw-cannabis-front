import React,{useContext} from 'react';
import Head from '../../../Components/Head';
import Header from '../../../Components/Header';
import {Link} from 'react-router-dom';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import { ArrowDiv, InnerContainerBg, InputContainer, ProfileBg,Return,Title, TitleContainer } from './styles';
import Arrow from '../../../Assets/arrow.svg';
import { Button } from '../../../Utils/styles';
import AuthContext from '../../../Storage/auth-context';

export default function Dados(){
  const {userInfo} = useContext(AuthContext)


  return(

    <>
    <Head title="Terapeutas Cannábicos - Dados dos perfil" description="Descrição do dados"/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Title active={true}>DADOS</Title>
        <Link to='/perfil/pacientes'><Title>PACIENTES</Title></Link>
      </TitleContainer>
      <InnerContainerBg>
        <ArrowDiv><Link to='/perfil'><Return src={Arrow}/></Link></ArrowDiv>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse disabled placeholder={userInfo.name}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled placeholder='Godinho Souza Braga'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Email:</InputTitle>
          <InputReverse disabled placeholder={userInfo.email}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone celular:</InputTitle>
          <InputReverse disabled placeholder='(21)968009372'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone secundário:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse style={{'width':'300px'}} placeholder=''/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse style={{'width':'100px'}} placeholder=''/>
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
        <Button>ALTERAR DADOS</Button>
      </InnerContainerBg>
    </ProfileBg>

    </>
  )
}