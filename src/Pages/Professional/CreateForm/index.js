import React, { useReducer, useState,useEffect } from 'react';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { ContainerBg, InnerContainerBg } from '../Pacients/styles';
import {Title,TitleContainer} from '../../../Pages/Professional/Profile/styles';
import {InputReverse} from '../../../Components/Input/styles';
import { ModalDiv, Button, DivOption, InputOption, QuestionContainer, RadioContainer, RadioName, RadioOption, DownButton, RadioContainerBg,TypeContainer, TypeTitle, ButtonsContainer, UpButton, RemoveIcon, SmallInput, OptionContainer, QuestionBg } from './styles';
import BigModal from '../../../Components/BigModal';
import {  OptContainer, WindowText, WindowTitle } from '../../Login/styles';
import Modal from '../../../Components/Modal';
import { v4 as uuidv4 } from 'uuid';


const questionReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length > 5};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length > 5};
  }
  return {value:'', isValid:false };
};


export default function CreateForm(){
    
    const [questions,setQuestions]=useState([]);
    const [isChecked,setIsChecked]=useState(false);
    const [options,setOptions]=useState([{id:uuidv4(),value:'Digite a opção'},{id:uuidv4(),value:'Digite a opção'}]);
    const [modal,setModal]=useState(false)
    const [formIsValid, setFormIsValid] = useState(false); 
    const fullUrl=window.location.pathname
    const id=parseInt(fullUrl.slice(-1))
    const path='/pacientes/menu/acompanhamento/'+id
    const [questionState,dispatchQuestion] = useReducer(questionReducer,{
      value:'',
      isValid: null,
    }); 

    const {isValid:questionIsValid } =questionState;
    useEffect(() => {
      const identifier = setTimeout(() => {
        //console.log('Checking form validity!');
        setFormIsValid(
         questionIsValid
        );
      }, 500);
  
      return () => {
        //console.log('CLEANUP');
        clearTimeout(identifier);
      };
    }, [questionIsValid]); 
    
    const displayQuestions=questions.map((item)=>{
      const displayOptions=item.options.map((item)=>{
        return(
          <>
          <SmallInput placeholder={item.value} key={item.id} disabled/>
          </>
        )
      })
      return(
        <QuestionBg>
        <QuestionContainer>
          <InputReverse placeholder={item.title} disabled/>
          <ButtonsContainer>
            <UpButton/>
            <DownButton/>
            <RemoveIcon onClick={()=>removeQuestion(item.id)}/>
          </ButtonsContainer>
        </QuestionContainer>
        {item.options?displayOptions:null}

        </QuestionBg>
      )
    })
  

    const questionChangeHandler = (event) => {
      dispatchQuestion({type:'USER_INPUT', val:event.target.value});
    };

    const validateQuestionHandler = () => {
      dispatchQuestion({type:'INPUT_BLUR'});
    };

    const removeQuestion=(id)=>{
      const index = questions.findIndex(x => x.id ===id);
    
    const filteredList = questions.filter(function(i){ 
     const check=questions.indexOf(i);
      return check != index;
  });
    setQuestions(filteredList)
    }

    const removeOption=(id)=>{
      const index = options.findIndex(x => x.id ===id);
    
    const filteredList = options.filter(function(i){ 
     const check=options.indexOf(i);
      return check != index;
  });
    setOptions(filteredList)
    }
    
 

    const addQuestion=(title,type,options)=>{
      if(type==='discursive'){
        const newItem={id:uuidv4(),title:title,type:type}
        const newList=questions.concat(newItem)
        setQuestions(newList)
        
      }
      else{
        const newItem={id:uuidv4(),title:title,type:type,options:options}
      const newList=questions.concat(newItem)
      
      setQuestions(newList)
      }
     closeWindow()
     
    }

    const createQuestion=(type)=>{
      setModal(true)
      console.log(questions)
    }
    
    
    const addOption=()=>{
      const newItem={id:uuidv4(),value:'Digite a opção'}
      const newList=options.concat(newItem)
      setOptions(newList)
    }

    const changeHandler=()=>{
      setIsChecked(true)
      
    }

    const closeWindow=()=>{
      setModal(false);
      questionState.value=''
      setFormIsValid(false)
      setOptions([1,2])
    }

    const optionsWindow=options.map((item)=>{
      const changeHandler=(e)=>{
        const index=options.findIndex(x => x.id === item.id);
        const newItem=e.currentTarget.value
        const newObject=options
        newObject[index].value=newItem
        setOptions(newObject)
       
      }
      return(
        <>
         <OptionContainer><SmallInput placeholder={item.value}  onChange={(e)=>changeHandler(e)}/><RemoveIcon onClick={()=>removeOption(item.id)}/></OptionContainer>
        </>
      )
    })

    const Discursive=()=>{
      return(
        <Modal onClose={closeWindow}>
          <InnerContainerBg>
            <ModalDiv>
              <WindowTitle>Criação de pergunta</WindowTitle>
              <InputReverse placeholder='Digite aqui sua pergunta' value={questionState.value} 
              onChange={questionChangeHandler} onBlur={validateQuestionHandler} validation={questionState.isValid}/>
              
              <Button color='green' onClick={()=>addQuestion(questionState.value,input.value)} disabled={!formIsValid}>Adicionar pergunta</Button>
            </ModalDiv>
          </InnerContainerBg>
        </Modal>
      )
    }

    const NotDiscursive=()=>{
      return(
        <BigModal onClose={closeWindow}>
          <InnerContainerBg>
            <ModalDiv>
              <WindowTitle>Criação de pergunta</WindowTitle>
              <InputReverse placeholder='Digite aqui sua pergunta' value={questionState.value} 
              onChange={questionChangeHandler} onBlur={validateQuestionHandler} validation={questionState.isValid}/>
              <DivOption>
              {optionsWindow}
              </DivOption>
              <Button color='green' onClick={()=>addOption()}>Adicionar opção</Button>
              <Button color='green' onClick={()=>addQuestion(questionState.value,input.value,options)} disabled={!formIsValid}>Adicionar pergunta</Button>
            </ModalDiv>
          </InnerContainerBg>
        </BigModal>
      )
    }

    const addQuestionWindow=()=>{
      
      return(
        <>
        {input.value==='discursive'?<Discursive/>:<NotDiscursive/>}
        </>
      )
    }


    const input = document.querySelector('input[type=radio]:checked')
    

    return(
        <>
        {modal?addQuestionWindow():null}
        <Head title="Terapeutas Cannábicos - Criação de ficha" description="Criação forms"/>
        <Header/>
        <ContainerBg>
        <TitleContainer>
        <Title active={true}>CRIAR FICHA</Title>
        </TitleContainer>
        <InnerContainerBg>
            <Return destiny={path}/>
          
            <TypeTitle>Bem vindo à criação de formulários de acompanhamento! Escolha o tipo de pergunta desejada e clique no botão para criar a pergunta.</TypeTitle>
            <RadioContainerBg>
              <RadioContainer>         
                <RadioOption>
                  <input type="radio" id="discursive" name="question" value="discursive" onChange={changeHandler}/>
                  <RadioName for='discursive'>Pergunta discursiva</RadioName>
                </RadioOption>
                <RadioOption>
                  <input type="radio" id="unique" name="question" value="unique" onChange={changeHandler}/>
                  <RadioName for='unique'>Pergunta objetiva (escolha única)</RadioName>
                </RadioOption>
                <RadioOption>
                  <input type="radio" id="multiple" name="question" value="multiple" onChange={changeHandler}/>
                  <RadioName for='multiple'>Pergunta objetiva (múltipla escolha)</RadioName>
                </RadioOption>
                </RadioContainer>
              <Button color='green' onClick={()=>createQuestion()} disabled={!isChecked} >Criar pergunta</Button>
            </RadioContainerBg>
            {displayQuestions}
        </InnerContainerBg>
        </ContainerBg>
        </>
    )
}

/*

<TypeContainer>
              <TypeTitle>Perguntas discursivas</TypeTitle>
              {displayDiscursive}
              <Button color='green' onClick={()=>addQuestion('discursive')}>Adicionar pergunta</Button>
            </TypeContainer>
            <TypeContainer>
              <TypeTitle>Perguntas objetivas<br/>(escolha única)</TypeTitle>
              {displayRadio}
              <Button color='green' onClick={()=>addQuestion('discursive')}>Adicionar pergunta</Button>
            </TypeContainer>
            <TypeContainer>
              <TypeTitle>Perguntas objetivas<br/>(escolha múltipla)</TypeTitle>
              
              <Button color='green' onClick={()=>addQuestion('discursive')}>Adicionar pergunta</Button>
            </TypeContainer>
*/