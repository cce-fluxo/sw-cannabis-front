import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import {ProfileBg,SubTitle,Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import { InnerContainerBg,CalendarContainer } from './styles';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import api from '../../../Services/api';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './utils'
import { Button } from '../../../Utils/styles';
import moment from 'moment';
import AuthContext from '../../../Storage/auth-context';


function isAnOverlapEvent(events,start,end ) {
  let validation=false
  try{
      if (moment(start)._isAMomentObject && moment(end)._isAMomentObject) {
          
          for (let i = 0; i < events.length; i++) {
              const eventA = events[i];
     
                  if (moment(end).isAfter(eventA.start) && moment(end).isBefore(eventA.end)) {
                      console.log('final durante um evento')
                      
                      validation=true
                      break
                  }
                   else if(moment(start).isBefore(eventA.end) && moment(start).isAfter(eventA.start)){
                     console.log("inicio durante um evento")
                     
                     validation=true
                    break
                   }
                   else if(moment(start).isBefore(eventA.start) && moment(end).isAfter(eventA.end) ){
                    console.log("inicio antes e fim depois")
                    
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





export default function CalendarPro(){
  //window.localStorage.setItem('teste','')

  const {onSaveDoctorCalendar}=useContext(AuthContext)
  const id=localStorage.getItem('ID')
  const [currentEvents,setCurrentEvents]=useState('');
  
   const handleDateSelect = (selectInfo) => {
    //window.alert(`O horário ${moment((selectInfo.startStr))._d.toLocaleString().slice(0,17)} - ${moment((selectInfo.endStr))._d.toLocaleString().slice(0,17)} agora está indisponível para os pacientes.`)
    const title='Bloqueado'
    const calendarApi = selectInfo.view.calendar
    moment.locale('pt-br')
    console.log(moment((selectInfo.startStr)).format('lll'))
    console.log(moment((selectInfo.startStr))._d.toLocaleString())
    console.log(`${selectInfo.startStr.toLocaleString()}-${selectInfo.endStr}`)
    calendarApi.unselect() // clear date selection
   
      if(isAnOverlapEvent(currentEvents,selectInfo.startStr,selectInfo.endStr)){
        return false
      }
      else{
        window.alert(`O horário ${moment((selectInfo.startStr))._d.toLocaleString().slice(0,17)} - ${moment((selectInfo.endStr))._d.toLocaleString().slice(0,17)} agora está indisponível para os pacientes.`)
            calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
            editable:false
          })
      }
      
    


    // if (title) {
    //   if(title.includes('consulta')){
    //     calendarApi.addEvent({
    //       id: createEventId(),
    //       title,
    //       start: selectInfo.startStr,
    //       end: selectInfo.endStr,
    //       allDay: selectInfo.allDay,
    //       editable:false,
    //     })
    //   }
    //   else{
    //         calendarApi.addEvent({
    //         id: createEventId(),
    //         title,
    //         start: selectInfo.startStr,
    //         end: selectInfo.endStr,
    //         allDay: selectInfo.allDay,
    //         editable:true
    //       })
    //   }
      
    // }
  }
  

  const handleEventClick = (clickInfo) => {
    if(clickInfo.event._def.title.includes('consulta')){
      window.alert('Você não pode remover uma consulta')
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
  onSaveDoctorCalendar(currentEvents,id)
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