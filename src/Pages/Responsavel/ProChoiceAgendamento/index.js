import React,{useState,useEffect} from 'react';
import Header from '../../../Components/Header';
import { InnerContainerBg,ContainerBg,Title, ContainerTitle } from '../Consultas/styles';
import Return from '../../../Components/Return';
import {Button} from '../../../Utils/styles';
import Calendar from '../../../Components/Calendar';
import { CalendarContainer,DropOptions,CheckContainer,CheckDiv,CheckOption } from './styles';
import {InputDiv,InputTitle} from '../../../Components/Input/styles';





export default function ProChoice(){
  sessionStorage.setItem('Horários',JSON.stringify([]));
  sessionStorage.setItem('Profissional','');
  const [formIsValid,setFormIsValid]=useState();
  
  if(sessionStorage.getItem('Profissional')!=''){
    console.log('ol')
  }

  

  function submitHandler(){
    const chosenDays=JSON.parse(sessionStorage.getItem('Dias'))
    const chosenHours=JSON.parse(sessionStorage.getItem('Horários'))
    const chosenPro=sessionStorage.getItem('Profissional')
    console.log(chosenPro,chosenDays,chosenHours)
  }


  function proSelection(){
    const e=document.getElementById('profissional');
    const selectedItem=e.options[e.selectedIndex].value;
    sessionStorage.setItem('Profissional',selectedItem)
  }
  
  function getCheckboxvalue() {
    const chosenHours=[];
  for (var i=0;i< document.getElementsByName("horas").length;i++){
   if ( document.getElementsByName("horas")[i].checked) {
    chosenHours.push(document.getElementsByName("horas")[i].value);
    }
}
  sessionStorage.setItem('Horários',JSON.stringify(chosenHours))
}

  const hours = [
    {id:1,name:'08:00-09:00'},
    {id:2,name:'08:30-09:30'},
    {id:3,name:'09:00-10:00'},
    {id:4,name:'09:30-10:30'},
    {id:5,name:'10:00-11:00'},
    {id:6,name:'10:30-11:30'},
    {id:7,name:'11:00-12:00'},
    {id:8,name:'11:30-12:30'},
    {id:9,name:'12:00-13:00'},
    {id:10,name:'12:30-13:30'},
    {id:11,name:'13:00-14:00'},
    {id:12,name:'13:30-14:30'},
    {id:13,name:'14:00-15:00'},
    {id:14,name:'14:30-15:30'},
    {id:15,name:'15:00-16:00'},
    {id:16,name:'15:30-16:30'}
  ]
  const renderList = hours.map((item)=>(
    <CheckDiv key={item.id}>
      <CheckOption name='horas' id={item.name} value={item.name} type='checkbox' onClick={getCheckboxvalue}/>{item.name}
    </CheckDiv>
  ));


  return(
    <>
    <Header/>
    <ContainerBg>
      <Title>CONSULTAS</Title>
      <InnerContainerBg>
      <Return destiny='/consultas/paciente'/>
      <ContainerTitle>Preencha os campos abaixo para solicitar o agendamento da sua consulta.</ContainerTitle>
      <div style={{'height':'40px'}}></div>
      <InputDiv>
        <InputTitle>Profissional desejado</InputTitle>
        <DropOptions id='profissional' onChange={proSelection}>
          <option id='none' disabled hidden selected></option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Psicólogo</option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Nutricionista</option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Terapeuta</option>
        </DropOptions>
      </InputDiv>
      <InputDiv>
        <InputTitle>Dias desejados</InputTitle>
        <CalendarContainer>
          <Calendar/>
        </CalendarContainer>
      </InputDiv>
      <InputDiv>
        <InputTitle>Horários desejados</InputTitle>
        <CheckContainer >
            {renderList}
        </CheckContainer>
      </InputDiv>
      
      <ContainerTitle>ATENÇÃO: A alocação da consulta não é garantida
para as datas e horários desejados.</ContainerTitle>
      <Button style={{'width':'200px'}} onClick={submitHandler}>SOLCITAR AGENDAMENTO</Button>
      </InnerContainerBg>
    </ContainerBg>
    </>
  )
}