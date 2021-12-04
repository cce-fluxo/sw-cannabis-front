import React,{useEffect, useState} from 'react';
import Header from '../../../Components/Header';
import { InnerContainerBg,ContainerBg,Title } from '../Consultas/styles';

import Return from '../../../Components/Return';
import {Button} from '../../../Utils/styles';

import {FullCalendarContainer } from '../ProChoiceAgendamento/styles';
import moment from 'moment';


import FullCalendar from '@fullcalendar/react' // must go before plugins
//import { Calendar } from '@fullcalendar/core';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {createEventId } from './utils'





export default function CalendarDoctor(){
  const [consultLimit,setConsultLimit]=useState(false)
  //const [initialEvents,setInitialEvents]=useState(fakeEvents)
  const [currentEvents,setCurrentEvents]=useState();
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  const [formIsValid,setFormIsValid]=useState(false);
  

  const fakeEvents=[
  {id:createEventId(), title:'Indisponível',start: "2021-09-04T11:00:00-03:00", end: "2021-09-04T16:00:00-03:00", display:'block', color:'darkBlue', selectable:false, editable:false},
  {id:createEventId(), title:'Indisponível',start: "2021-09-15T08:30:00-03:00", end: "2021-09-15T12:30:00-03:00", display:'block', color:'darkBlue', selectable:false, editable:false},
  {id:createEventId(), title:'Indisponível',start: "2021-09-07T11:00:00-03:00", end: "2021-09-09T14:00:00-03:00", display:'block', color:'darkBlue', selectable:false, editable:false} ,
  {id:createEventId(), title:'Indisponível',start: "2021-09-10T10:55:00-03:00", end: "2021-09-10T16:15:00-03:00", display:'block', color:'darkBlue', selectable:false, editable:false},
  {id:createEventId(), title:'Indisponível',start: "2021-09-16T07:30:00-03:00", end: "2021-09-16T19:30:00-03:00", display:'block', color:'darkBlue', selectable:false, editable:false},
  {id:createEventId(), title:'Indisponível',start: "2021-09-13T10:15:00-03:00", end: "2021-09-13T17:45:00-03:00", display:'block', color:'red', selectable:false, editable:false}]
  const chosenConsultTime=60

  function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.getFullYear()+'/'+addZeroBefore(result.getMonth()+1)+'/'+addZeroBefore(result.getDate());
  }
  
  var today = new Date();
  //console.log(today)
  var currentHours = today.getHours();
  currentHours = ("0" + currentHours).slice(-2);

//var currentDate = today.getDate()+'/'+addZeroBefore(today.getMonth()+1)+'/'+today.getFullYear()
var reverseCurrentDate=today.getFullYear()+'/'+addZeroBefore(today.getMonth()+1)+'/'+today.getDate()
var limitDate=addDays(reverseCurrentDate,2)
//var currentTime=currentHours + ":" + today.getMinutes() + ":" + today.getSeconds().toLocaleString();

function isBeforeLimitDate(date) {
  //const reverseDate1=test.getFullYear()+'-'+addZeroBefore(test.getMonth()+1)+'-'+addZeroBefore(test.getDate())
  //console.log(reverseDate1)
    return date <= limitDate
  }

    
  function isAnOverlapEvent(events,start,end ) {
    let validation=false
    try{
        if (moment(start)._isAMomentObject && moment(end)._isAMomentObject) {
          console.log('yep')
            
            for (let i = 0; i < events.length; i++) {
                const eventA = events[i];
       
                    if (moment(end).isAfter(eventA.start) && moment(end).isBefore(eventA.end)) {
                        console.log('final durante um evento')
                        console.log(eventA)
                        validation=true
                        break
                    }
                     else if(moment(start).isBefore(eventA.end) && moment(start).isAfter(eventA.start)){
                       console.log("inicio durante um evento")
                       console.log(eventA)
                       validation=true
                      break
                     }
                   
                  }
                  
            }
            
            else {
            const error = 'Error, start or end are not Moment objects';
            console.error(error);
           throw new Error(error);
            
        }
      }
       catch (error) {
        console.error(error);
        throw error;
      } 
      return validation
    } 
  
  
  
  

  const handleDateSelect = (selectInfo) => {
    
   let title ='Consulta ${nome}'
   let calendarApi = selectInfo.view.calendar
   let startDate=selectInfo.start
  
   let reverseStartDate=startDate.getFullYear()+'/'+addZeroBefore(startDate.getMonth()+1)+'/'+addZeroBefore(startDate.getDate())
   let eventDuration=(selectInfo.end.getHours()*60+selectInfo.end.getMinutes())-(startDate.getHours()*60+startDate.getMinutes())
   
   //isAnOverlapEvent(fakeEvents,selectInfo.startStr,selectInfo.endStr)
   //console.log(eventDuration)
    //console.log(reverseCurrentDate)
   
  //console.log(isBefore(reverseStartDate))
   if(consultLimit || selectInfo.view.type==='dayGridMonth' || isBeforeLimitDate(reverseStartDate) || eventDuration>chosenConsultTime 
   || isAnOverlapEvent(fakeEvents,selectInfo.startStr,selectInfo.endStr)
   ){
    calendarApi.unselect() 
   }
   else if(!consultLimit){
     if(window.confirm('Deseja marcar uma consulta nesse horário?')){
      //console.log(selectInfo.view.type)
      calendarApi.unselect() // clear date selection
      setConsultLimit(true)
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
            eventDurationEditable:false,
            eventStartEditable:true,
            overlap: false
          })
     
   }
   else{
    calendarApi.unselect()
   }
   
   }
   
 }

 


 


 const handleEventClick = (clickInfo) => {
   
   //console.log(clickInfo.view)
    if(clickInfo.event.title==='Indisponível'){
      console.log('bloqueado')
    }
    else{
      //console.log(clickInfo.event)
      if(window.confirm(
       `Tem certeza que deseja excluir o evento '${clickInfo.event.title}'?`
     ) ){
       clickInfo.event.remove(); 
       setConsultLimit(false)
       

     }
    }
     
      
   
 };

 const handleEvents = (events) => {
   setCurrentEvents(events)
   //console.log(events,'-=-' ,currentEvents)
 };

 

function renderEventContent(eventInfo) {
 return (
   <>
     <b>{eventInfo.timeText}</b><br/>
     <i>{eventInfo.event.title}</i>
   </>
 );
}




const submitHandler=()=>{
 window.localStorage.setItem('Solicitação de consulta',JSON.stringify(currentEvents))
}


  const path='/consultas/paciente/agendamento/'+id
  return(
    <>
    <Header/>
    <ContainerBg>
      <Title>CONSULTAS</Title>
      <InnerContainerBg>
      <Return destiny={path}/>
      <FullCalendarContainer>
          <FullCalendar
          plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          locale={ptLocale}
          themeSystem={'minty'}
            overlap={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventOverlap={false}
            initialEvents={fakeEvents} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} //dando erro
            slotMinTime='07:00:00'
            slotMaxTime='21:00:00'
            allDaySlot={false}
            slotDuration='01:00:00'
            eventDurationEditable={false}
            eventStartEditable={true}
            selectOverlap= {()=>function(event){
              // Here you will get all background events which are on same time.
              console.log(event);
              return event.rendering === 'background';
          }}
           //eventAdd={}
            //eventChange={function(){}}
            //eventRemove={function(){}}
          />
        </FullCalendarContainer>
         <Button onClick={submitHandler} disabled={!consultLimit}>AGENDAR CONSULTA</Button> 
      </InnerContainerBg>
    </ContainerBg>
    </>
  )
}




/*
import React,{useState,useEffect} from 'react';
import Header from '../../../Components/Header';
import { InnerContainerBg,ContainerBg,Title, ContainerTitle } from '../Consultas/styles';
import {Link,useParams} from 'react-router-dom';
import Return from '../../../Components/Return';
import {Button} from '../../../Utils/styles';
import Calendar from '../../../Components/Calendar';
import { CalendarContainer,DropOptions,CheckContainer,CheckDiv,CheckOption,Table,InfoIcon, FullCalendarContainer } from './styles';
import {InputDiv,InputTitle} from '../../../Components/Input/styles';
import Picker from '../../../Components/Picker';
import Info from '../../../Assets/info.svg';
import api from '../../../Services/api';


import FullCalendar from '@fullcalendar/react' // must go before plugins
//import { Calendar } from '@fullcalendar/core';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './utils'





export default function ProChoice(){
  const isBlocked=!true
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  //const {id}=useParams(ID)
  sessionStorage.setItem('Horários',JSON.stringify([]));
  
  const [pro,setPro]=useState('');
  const [proCalendar,setProCalendar]=useState(false)
  const [proSelect,setProSelect]=useState('');
  const [formIsValid,setFormIsValid]=useState(false);

  
  async function proListRequest(type){
    const token = localStorage.getItem('Token');
    const rota='/lista/medico/'+type.toLowerCase()
    api.get(rota, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data)
        
        
        
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function submitHandler(){
    const chosenDays=JSON.parse(sessionStorage.getItem('Dias'))
    const chosenHours=JSON.parse(sessionStorage.getItem('Horários'))
    const chosenPro=sessionStorage.getItem('Profissional')
    console.log(chosenPro,chosenDays,chosenHours)
  }

  function submitHandler2(){
    
    const chosenPro=localStorage.getItem('Profissional')
    setPro(chosenPro)
    console.log(chosenPro)
    //proListRequest(chosenPro)
  }

  const proSelection=(event)=>{
    // const e=document.getElementById('profissional');
    // const selectedItem=e.options[e.selectedIndex].value;
    // sessionStorage.setItem('Profissional',selectedItem)
    setProSelect(event.target.value)
    localStorage.setItem('Profissional',event.target.value)
    setFormIsValid(true)
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


  const Blocked=()=>{
    return(
      <>
      <ContainerTitle>Preencha os campos abaixo para solicitar o agendamento da sua consulta.</ContainerTitle>
      <div style={{'height':'40px'}}></div>
      <InputDiv>
        <InputTitle>Profissional desejado</InputTitle>
        <DropOptions id='profissional' onChange={proSelection}>
          <option id='none' disabled hidden default></option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Psicólogo</option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Nutricionista</option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Terapeuta</option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Médico</option>
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
      <Button style={{'width':'200px'}} onClick={submitHandler} >SOLCITAR AGENDAMENTO</Button>
      </>
    )
  }

  const Unblocked=()=>{
    return(
      <>
      <ContainerTitle>Selecione um profissional para ver seus horários e agendar uma consulta</ContainerTitle>
      <div style={{'height':'40px'}}></div>
      <InputDiv>
        <InputTitle>Profissional desejado</InputTitle>
        <DropOptions id='profissional' onChange={proSelection} value={proSelect}>
          <option id='none' disabled hidden selected></option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Psicólogo</option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Nutricionista</option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Terapeuta</option>
          <option  style={{'color':'white','backgroundColor':'#262626'}}>Medico</option>

        </DropOptions>
      </InputDiv>
     
      <Button style={{'width':'200px'}} onClick={submitHandler2} disabled={!formIsValid}>AVANÇAR</Button>
      </>
    )
  }

  const testList=[
    {name:'Alberto Fernandes',
    job:'Psicólogo', id:'1'},
    {name:'Maria Fernandes',
    job:'Psicóloga',id:'2'},
    {name:'Alberto Fernandes',
    job:'Nutricionista',id:'3'},
    {name:'Alberto Fernandes',
    job:'Terapeuta',id:'4'},
]



const calendarChoice=(name)=>{
  setProCalendar(name)
  console.log(name)
  sessionStorage.setItem('Nome do Profissional',name)
}


const list = testList.map((item,index)=>{
    const rota='/consultas/paciente/agendamento/calendario/'+id
    return(
      <>
        <Table key={item.id}>
            <p>{item.name} - {item.job}</p>
            <Link to={rota}><InfoIcon src={Info} onClick={()=>calendarChoice(item.name)}/></Link>
        </Table>
      
      </>
    )
  })



  const ProList=()=>{
    console.log('rodando')

    return(
      <>
      <InputDiv>
        <InputTitle>Profissional desejado: {pro}</InputTitle>
        {list}
      </InputDiv>
      </>
    )
  }

  const fakeEvents=[
  { title:'Indisponível',start: "2021-09-04T11:00:00-03:00", end: "2021-09-04T16:00:00-03:00", display:'background', color:'darkBlue', selectable:false, editable:false},
  { title:'Indisponível',start: "2021-09-06T08:30:00-03:00", end: "2021-09-06T12:30:00-03:00", display:'background', color:'darkBlue', selectable:false, editable:false},
  { title:'Indisponível',start: "2021-09-06T11:00:00-03:00", end: "2021-09-09T14:00:00-03:00", display:'background', color:'darkBlue', selectable:false, editable:false} ,
  { title:'Indisponível',start: "2021-09-09T10:55:00-03:00", end: "2021-09-08T16:15:00-03:00", display:'background', color:'darkBlue', selectable:false, editable:false},
  { title:'Indisponível',start: "2021-09-06T07:30:00-03:00", end: "2021-09-06T19:30:00-03:00", display:'background', color:'darkBlue', selectable:false, editable:false},
  { title:'Indisponível',start: "2021-09-03T10:15:00-03:00", end: "2021-09-03T17:45:00-03:00", display:'background', color:'darkBlue', //selectable:false, 
  editable:false}]
  const chosenConsultTime=60

  function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.getFullYear()+'/'+addZeroBefore(result.getMonth()+1)+'/'+addZeroBefore(result.getDate());
  }
  

  

  var today = new Date();
  //console.log(today)
  var currentHours = today.getHours();
  currentHours = ("0" + currentHours).slice(-2);

//var currentDate = today.getDate()+'/'+addZeroBefore(today.getMonth()+1)+'/'+today.getFullYear()
var reverseCurrentDate=today.getFullYear()+'/'+addZeroBefore(today.getMonth()+1)+'/'+today.getDate()
var limitDate=addDays(reverseCurrentDate,2)
//var currentTime=currentHours + ":" + today.getMinutes() + ":" + today.getSeconds().toLocaleString();

function isBefore(date) {
    return date <= limitDate
  }

  const [consultLimit,setConsultLimit]=useState(false)
  const [initialEvents,setInitialEvents]=useState(fakeEvents)
  const [currentEvents,setCurrentEvents]=useState();

  const handleDateSelect = (selectInfo) => {

   let title ='Consulta ${nome}'
   let calendarApi = selectInfo.view.calendar
   console.log(calendarApi)
   let startDate=selectInfo.start
   let reverseStartDate=startDate.getFullYear()+'/'+addZeroBefore(startDate.getMonth()+1)+'/'+addZeroBefore(startDate.getDate())
   let eventDuration=(selectInfo.end.getHours()*60+selectInfo.end.getMinutes())-(startDate.getHours()*60+startDate.getMinutes())
   //console.log(eventDuration)
    //console.log(reverseCurrentDate)
   console.log(selectInfo)
  //console.log(isBefore(reverseStartDate))
   if(consultLimit || selectInfo.view.type==='dayGridMonth' || isBefore(reverseStartDate) || eventDuration>chosenConsultTime){
    calendarApi.unselect()
   }
   else if(!consultLimit){
     if(window.confirm('Deseja marcar uma consulta nesse horário?')){
      //console.log(selectInfo.view.type)
      calendarApi.unselect() // clear date selection
      setConsultLimit(true)
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
            eventDurationEditable:false,
            eventStartEditable:true,
            overlap: false
          })
     
   }
   else{
    calendarApi.unselect()
   }
   
   }
   
 }
 

 const handleEventClick = (clickInfo) => {
   console.log(clickInfo.event.title)
    if(clickInfo.event.title==='Indisponível'){
      console.log('bloqueado')
    }
    else{
      
      if(window.confirm(
       `Tem certeza que deseja excluir o evento '${clickInfo.event.title}'?`
     ) ){
       clickInfo.event.remove(); 
       setConsultLimit(false)
     }
    }
     
      
   
 };

 const handleEvents = (events) => {
   setCurrentEvents(events)
   //console.log(events,'-=-' ,currentEvents)
 };

 

function renderEventContent(eventInfo) {
 return (
   <>
     <b>{eventInfo.timeText}</b><br/>
     <i>{eventInfo.event.title}</i>
   </>
 );
}


const submitHandle=()=>{
 window.localStorage.setItem('Solicitação de consulta',JSON.stringify(currentEvents))
}

const Calend=()=>{
  return(
    <FullCalendarContainer>
          <FullCalendar
          plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          locale={ptLocale}
          eventDurationEditable={false}
          eventStartEditable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventOverlap={false}
            initialEvents={JSON.parse(window.localStorage.getItem('teste'))} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} 
            slotDuration='01:30:00'

           //eventAdd={}
            //eventChange={function(){}}
            //eventRemove={function(){}}
          />
        </FullCalendarContainer>
  )
}

const Calendario=()=>{
  //<Picker/>//<Calend/>
  
    return(
      <>
      <h1>Profissional: {proCalendar} ({pro}) </h1>
      
      </>
    )
  }


  const path='/consultas/paciente/'+id
  return(
    <>
    <Header/>
    <ContainerBg>
      <Title>CONSULTAS</Title>
      <InnerContainerBg>
      <Return destiny={path}/>
      
      {isBlocked?<Blocked/>:(pro===''?<Unblocked/>:(!proCalendar?<ProList/>:<Calendario/>))}
      <FullCalendarContainer>
          <FullCalendar
          plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          locale={ptLocale}
        
          
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventOverlap={false}
            initialEvents={initialEvents} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} //dando erro
            slotMinTime='07:00:00'
            slotMaxTime='21:00:00'
            allDaySlot={false}
            slotDuration='01:00:00'
            eventDurationEditable={false}
            eventStartEditable={true}
            
           //eventAdd={}
            //eventChange={function(){}}
            //eventRemove={function(){}}
          />
        </FullCalendarContainer>
          <button onClick={submitHandle}>teste</button>
      </InnerContainerBg>
    </ContainerBg>
    </>
  )
}

 */