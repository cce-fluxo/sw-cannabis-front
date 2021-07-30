import React,{useState} from 'react';
import Register from '../../Pages/Register';
import RegisterResp from '../../Components/RegisterResp/index';

import {Button, Title} from '../../Utils/styles';
import { InnerContainerBg, InnerContainer, InnerTitle, Line, SelectDiv, SelectOption } from './styles';
import RegisterMed from '../RegisterMed';
import RegisterAdm from '../RegisterAdm';


export default function UserType(){
  const [step,setStep] = useState(1)
  const [cadastro,setCadastro] = useState('')
  
  const FirstRegister = () =>{
    return (
      <>
      <InnerContainerBg>
        <InnerContainer>
        <div style={{'display':'flex','flexDirection':'column','alignItems':'center'}}>
        <InnerTitle>Que tipo de usuário é você?</InnerTitle>
        <Line/>
        </div> 
      <SelectDiv>
      <SelectOption type='radio' id='responsavel' name='first-type' value='resp'/>
      <label>Responsável/Paciente</label>
    </SelectDiv>
    <SelectDiv>
      <SelectOption type='radio' id='profissional' name='first-type' value='prof'/>
      <label>Profissional</label>
    </SelectDiv>
    <Button style={{'marginTop':'40px'}} onClick={handleSubmit}>CONTINUAR</Button>
    </InnerContainer>
      </InnerContainerBg>
    </>
    )
  }

  const ProRegister = () =>{
    return(
      <>
      <InnerContainerBg>
        <InnerContainer>
        <div style={{'display':'flex','flexDirection':'column','alignItems':'center'}}>
        <InnerTitle>Que tipo de usuário é você?</InnerTitle>
        <Line/>
        </div> 
      <SelectDiv>
          <SelectOption type='radio' id='medico' name='second-type' value='medico'/>
          <label>Médico</label>
        </SelectDiv>
        <SelectDiv>
          <SelectOption type='radio' id='adm' name='second-type' value='adm'/>
          <label>Administrador</label>
        </SelectDiv>
        <SelectDiv>
          <SelectOption type='radio' id='psic' name='second-type' value='medico'/>
          <label>Psicólogo</label>
        </SelectDiv>
        <Button style={{'marginTop':'40px'}} onClick={handleSubmitPro} >CONTINUAR</Button>
        </InnerContainer>
      </InnerContainerBg>
      </>
    )
  }




  const handleSubmit =()=>{
    if (document.getElementById("responsavel").checked) {
      setCadastro('responsavel');
      setStep(3)
      console.log("responsavel selecionado")
  }else if (document.getElementById("profissional").checked){
     setStep(2);
     
  }
}

const handleSubmitPro =()=>{
  if (document.getElementById("medico").checked) {
    setCadastro('medico');
    setStep(3)
    console.log("medico selecionado")
}else if (document.getElementById("adm").checked){
   setStep(3)
   setCadastro('adm');
   console.log('adm selecionado')
}else if (document.getElementById("psic").checked){
  setStep(3)
  setCadastro('psic');
  console.log('psicologo selecionado')
}
}

  

  return(
    <>
    
    {step===1?<FirstRegister/>:(step===2?<ProRegister/>:undefined)}
    {cadastro==='responsavel'?<RegisterResp/>:undefined}
    {cadastro==='medico'?<RegisterMed/>:undefined}
    {cadastro==='adm'?<RegisterAdm/>:undefined}
    {cadastro==='psic'?<RegisterMed/>:undefined}
        
        
       
   
    </>
  )
}