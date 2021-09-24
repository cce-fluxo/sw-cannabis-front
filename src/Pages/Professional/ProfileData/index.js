import React,{useContext,useEffect,useState,useReducer} from 'react';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import Header from '../../../Components/Header';
import {Link} from 'react-router-dom';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import {InnerContainerBg, InputContainer, ProfileBg,Title, TitleContainer } from './styles';
import { Button } from '../../../Utils/styles';
import AuthContext from '../../../Storage/auth-context';

export default function ProfileData(){
  const {userInfo}=useContext(AuthContext);
  console.log(userInfo)
  return(
    <>
    <Head title="Terapeutas Cannábicos - Dados do perfil" description="Descrição do dados"/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Title active={true}>DADOS</Title>
        <Link to='/perfil/calendario'><Title>CALENDÁRIO</Title></Link>
      </TitleContainer>
      <InnerContainerBg>
        <Return destiny='/perfil'/>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse disabled placeholder={userInfo.nome}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled placeholder={userInfo.sobrenome} />
        </InputDiv>
        <InputDiv>
          <InputTitle>Email:</InputTitle>
          <InputReverse disabled placeholder={userInfo.email} />
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone celular:</InputTitle>
          <InputReverse disabled placeholder={userInfo.celular} />
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone secundário:</InputTitle>
          <InputReverse autoComplete='off'  placeholder={userInfo.telefone_secundario}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse   disabled placeholder={userInfo.cpf}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse disabled placeholder={userInfo.rg}/>
        </InputDiv>
        
          <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse  placeholder={userInfo.cidade}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse  placeholder={userInfo.estado}/>
          </InputDiv>
        
        <InputDiv>
          <InputTitle>CEP:</InputTitle>
          <InputReverse autoComplete='off'  placeholder={userInfo.cep}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Endereço:</InputTitle>
          <InputReverse autoComplete='off'  placeholder={userInfo.endereco}/>
        </InputDiv>
        
          <InputDiv>
            <InputTitle>Nº:</InputTitle>
            <InputReverse  placeholder={userInfo.numero} />
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse  placeholder={userInfo.complemento} />
          </InputDiv>
        
        <Button type='submit' >SALVAR</Button>
      </InnerContainerBg>
    </ProfileBg>
    </>
  )
}