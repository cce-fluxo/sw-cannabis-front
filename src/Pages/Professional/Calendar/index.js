import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import {ProfileBg,SubTitle,Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import { InnerContainerBg,CalendarContainer } from './styles';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import { Calendar } from '@fullcalendar/core';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './utils'
import { Button } from '../../../Utils/styles';


export default function CalendarPro(){
  //window.localStorage.setItem('teste','')
  
  
  const [currentEvents,setCurrentEvents]=React.useState('');
  
   const handleDateSelect = (selectInfo) => {
    let title =prompt('Por favor, escolha um nome para seu evento.')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      if(title.includes('consulta')){
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
          editable:false,
        })
      }
      else{
            calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
            editable:true
          })
      }
      
    }
  }
  

  const handleEventClick = (clickInfo) => {
    if(!clickInfo.event.startEditable){
      window.alert('vc n pode remover uma consulta')
    }
    else{
      if (
      window.confirm(
        `Tem certeza que deseja excluir o evento '${clickInfo.event.title}'?`
      )
    ) {
      clickInfo.event.remove();
    }
    }
    
  };

  const handleEvents = (events) => {
    setCurrentEvents(events)
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
  window.localStorage.setItem('teste',JSON.stringify(currentEvents))
}


  return(
    <>
    <Head title="Terapeutas Cannábicos - Calendario do profissional" description="Descrição do calendario"/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Link to='/perfil/dados'><Title>DADOS</Title></Link>
        <Title active={true}>CALENDARIO</Title>
      </TitleContainer>
      <InnerContainerBg>
        <Return destiny='/perfil'/>
        <SubTitle>Preencha no calendário os horários em que você não estará disponível.</SubTitle>
        <CalendarContainer>
          <FullCalendar
          plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          locale={ptLocale}
          editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventOverlap={false}
            initialEvents={JSON.parse(window.localStorage.getItem('teste'))} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} 

           //eventAdd={}
            //eventChange={function(){}}
            //eventRemove={function(){}}
          />
        </CalendarContainer>
        <Button onClick={submitHandler}>SALVAR</Button>
      </InnerContainerBg>
    </ProfileBg>

    </>
  )
}