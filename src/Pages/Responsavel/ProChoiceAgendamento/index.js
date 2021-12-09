import React,{useState,useEffect, useContext} from 'react';
import Header from '../../../Components/Header';
import { InnerContainerBg,ContainerBg,Title, ContainerTitle } from '../Consultas/styles';
import {Link} from 'react-router-dom';
import Return from '../../../Components/Return';
import {Button} from '../../../Utils/styles';
import Calendar from '../../../Components/Calendar';
import { CalendarContainer,CheckContainer,Table,InfoIcon,SelectContainer, FieldTitle } from './styles';
import {InputDiv,InputTitle} from '../../../Components/Input/styles';
import Info from '../../../Assets/info.svg';
import AuthContext from '../../../Storage/auth-context';
import Select from 'react-select';
import {
  Flex,
  ChakraProvider,
  Checkbox,
  CheckboxGroup,
  HStack
} from "@chakra-ui/react";


// Pass the checkbox name to the function
function getCheckboxValues(name) {
  var checkboxes = document.getElementsByName(name);
  
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i].value);
     }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}



const proOptions=[ 
  { value: 'psicologo', label: 'Psicólogo' },
  { value: 'medico', label: 'Médico' },
  { value: 'nutricionista', label: 'Nutricionista' },
  { value: 'terapeuta', label: 'Terapeuta' },

]


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


export default function ProChoice(){
const {getProfessionals,professionalList}=useContext(AuthContext)
const isBlocked=true
const fullUrl=window.location.pathname
const id=parseInt(fullUrl.slice(-1))
const [formIsValid,setFormIsValid]=useState(false);

// ----------------- Blocked -------------- //

sessionStorage.setItem('Dias',JSON.stringify([]));
const [chosenPro,setChosenPro]=useState('');

function submitHandler(){
  const chosenDays=JSON.parse(sessionStorage.getItem('Dias'))
  const chosenHours=getCheckboxValues('horas')
  
  console.log(chosenPro,chosenDays,chosenHours)
}


const renderList = hours.map((item)=>(
  <ChakraProvider>
      <Flex padding={2}>
        <CheckboxGroup colorScheme="green" >
          <HStack>
            <Checkbox 
            key={item.id} 
            name='horas' 
            id={item.name} 
            value={item.name} 
            
            iconColor="white"
            >
              {item.name}
            </Checkbox>
          </HStack>
        </CheckboxGroup>
      </Flex>
  </ChakraProvider>
));


const Blocked=()=>{
return(
<>
  <ContainerTitle>Preencha os campos abaixo para solicitar o agendamento da sua consulta.</ContainerTitle>
      <FieldTitle>Profissional desejado</FieldTitle>
      <SelectContainer>
       <Select 
       theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'lightGreen',
          primary: '#789d55',
        },
      })}
       options={proOptions} 
       placeholder={chosenPro.label!==undefined?chosenPro.label:'Selecione uma opção'}
       noOptionsMessage={({}) =>  "Profissonal não encontrado"} 
       isClearable={true}
       
      onChange={(option, triggeredAction) => {
            if (triggeredAction.action === 'clear') {
                setChosenPro('Selecione uma opção')
                setFormIsValid(false)
            }
            else{
                setFormIsValid(true)
                setChosenPro(option)
                //console.log(pro)
                
                

            }
        }}
       />
    </SelectContainer>

    <FieldTitle>Dias desejados</FieldTitle>
    <CalendarContainer>
      <Calendar/>
    </CalendarContainer>

    <FieldTitle>Horários desejados</FieldTitle>
    <CheckContainer >
        {renderList}
    </CheckContainer>
    

  <ContainerTitle>ATENÇÃO: A alocação da consulta não é garantida
  para as datas e horários desejados.</ContainerTitle>
  <Button style={{'width':'200px'}} onClick={submitHandler} >SOLICITAR AGENDAMENTO</Button>
</>
)
}

// ----------------- Blocked -------------- //


// ----------------- Unblocked -------------- //


const [showProList,setShowProList]=useState(false);
const [proList,setProList]=useState([[{"nome":"Carregando","sobrenome":"","especialidade":"Aguarde"}]])
const [proCalendar,setProCalendar]=useState(false)




function submitHandler2(){
  setShowProList(true)
  getProfessionals(chosenPro.value).then(setProList)
  }
  

const Unblocked=()=>{
return(
<>
<ContainerTitle>Selecione um profissional para ver seus horários e agendar uma consulta</ContainerTitle>
  <SelectContainer>
       <Select 
       theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'lightGreen',
          primary: '#789d55',
        },
      })}
       options={proOptions} 
       placeholder={chosenPro.label!==undefined?chosenPro.label:'Selecione uma opção'}
       noOptionsMessage={({}) =>  "Profissonal não encontrado"} 
       isClearable={true}
       
      onChange={(option, triggeredAction) => {
            if (triggeredAction.action === 'clear') {
                setChosenPro('Selecione uma opção')
                setFormIsValid(false)
            }
            else{
                setFormIsValid(true)
                setChosenPro(option)
                //console.log(pro)
                
                

            }
        }}
       />
      </SelectContainer>
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

console.log((Object.values(proList)))

const calendarChoice=(name)=>{
setProCalendar(name)
console.log(name)
sessionStorage.setItem('Nome do Profissional',name)
}


const list = Object.values(proList)[0].map((item,index)=>{
const rota='/consultas/paciente/agendamento/calendario/'+id
return(
<>
  <Table >
      <p>{item.nome} {item.sobrenome} - {item.especialidade}</p>
      <Link to={rota}><InfoIcon src={Info} onClick={()=>calendarChoice(item.nome)}/></Link>
  </Table>

</>
)
})



const ProList=()=>{


return(
<>

  <FieldTitle>Profissional desejado: {chosenPro.label}</FieldTitle>
  {list}

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

{isBlocked?<Blocked/>:(!showProList?<Unblocked/>:<ProList/>)}

</InnerContainerBg>
</ContainerBg>
</>
)
}
