import React,{useState} from 'react';
import Register from '../../Pages/Register';
import RegisterResp from '../../Components/RegisterResp/index';

import {Button, Title} from '../../Utils/styles';
import { InnerContainerBg, InnerContainer, InnerTitle, Line, SelectDiv, SelectOption } from './styles';


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
        <Button style={{'marginTop':'40px'}} >CONTINUAR</Button>
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
     setStep(2)
     setCadastro('adm');
  }
}

  

  return(
    <>

    {step===1?<FirstRegister/>:(step===2?<ProRegister/>:undefined)}
    {cadastro==='responsavel'?<RegisterResp/>:undefined}
        
        
       
   
    </>
  )
}