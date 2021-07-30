import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import {ButtonSmall, Title} from '../../../Utils/styles';
import Return from '../../../Components/Return';
import Modal from '../../../Components/Modal';
import { ContainerBg,InnerContainerBg,InnerTitle } from '../Cadastros/styles';
import {InputReverse, InputTitle,InputDiv} from '../../../Components/Input/styles';
import { ButtonDiv,ModalDiv,ScrollContainer,TextArea,WindowText,WindowTitle } from './styles';

export default function Aprovar(){
    const [window,setWindow]=useState(false)
    const userType='mEDICO'
    const showWindow=()=>{
    setWindow(true)
  }
    const exclusão = () =>{
    return(
      <Modal onClose={() => setWindow(false)}>
          <ModalDiv>
            <WindowTitle>Rejeitar Cadastro</WindowTitle>
            <p>Informe o que deve melhorar nesse cadastro.</p>
            <ScrollContainer>
                <TextArea></TextArea>
            </ScrollContainer>
        
            <Link to='/cadastros'><ButtonSmall>Rejeitar</ButtonSmall></Link>
          </ModalDiv>
      </Modal>   
 ) 
}
    const RespUser=()=>{

        return(
            <>
            <InputDiv>
                <InputTitle>Nome:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Sobrenome:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Email:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Celular:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <ButtonDiv>
                <Link to='/cadastros'><ButtonSmall color='green'>Aceitar</ButtonSmall></Link>
                <span style={{'width':'20px'}}></span>
                <ButtonSmall onClick={showWindow}>Rejeitar</ButtonSmall>
            </ButtonDiv>
            </>
        )
    }

    const MedUser=()=>{

        return(
            <>
            <InputDiv>
                <InputTitle>Nome:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Sobrenome:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Sexo:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Email:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Telefone:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Celular:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Especialidade:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Biografia:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>CPF:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>RG:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Facebook:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Instagram:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Twitter:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Cidade:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Estado:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>CEP:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Bairro:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Endereço:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <InputDiv>
                <InputTitle>Complemento:</InputTitle>
                <InputReverse disabled placeholder='aaaaa'/>
            </InputDiv>
            <ButtonDiv>
                <Link to='/cadastros'><ButtonSmall color='green'>Aceitar</ButtonSmall></Link>
                <span style={{'width':'20px'}}></span>
                <ButtonSmall onClick={showWindow}>Rejeitar</ButtonSmall>
            </ButtonDiv>
            </>
        )
    }


    return(
        <>
        <Header/>
        <ContainerBg>
            {window?exclusão():null}
            <Title underline={true}>CADASTROS</Title>
            <InnerContainerBg>
                <Return destiny='/cadastros'/>
                {userType==='Responsável'?<RespUser/>:<MedUser/>}
               
            </InnerContainerBg>

        </ContainerBg>
        </>
    )
}