import React from 'react';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { ContainerBg, InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import {InputReverse} from '../../../Components/Input/styles';
import {  Button, QuestionContainer, TypeContainer, TypeTitle } from './styles';



export default function CreateForm(){
  
     const Discursive=(num)=>{
       const question='Digite aqui a pergunta'+num
       return(
    <QuestionContainer>
      <InputReverse placeholder={question}/>
    </QuestionContainer>
       )
     
     } 
      
    const fullUrl=window.location.pathname
    const id=parseInt(fullUrl.slice(-1))
    const path='/pacientes/menu/acompanhamento/'+id
    return(
        <>
        
        <Head title="Terapeutas Cannábicos - Criação de ficha" description="Criação forms"/>
        <Header/>
        <ContainerBg>
        <TitleContainer>
        <Title active={true}>CRIAR FICHA</Title>
        </TitleContainer>
        <InnerContainerBg>
            <Return destiny={path}/>
            <TypeContainer>
              <TypeTitle>Perguntas discursivas</TypeTitle>
              <Discursive />
              <Button color='green'>Adicionar pergunta</Button>
            </TypeContainer>
        </InnerContainerBg>
        </ContainerBg>
        </>
    )
}