import SunEditor,{buttonList} from 'suneditor-react';
//import suneditor from 'suneditor';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import React,{useState,useReducer,useEffect} from 'react';
import api from '../../../Services/api';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import {InputReverse} from '../../../Components/Input/styles';
import {  ContainerBg, InnerContainerBg} from '../Pacients/styles';
import {Title,TitleContainer, SubTitle} from '../../../Pages/Professional/Profile/styles';
import { Button } from '../../../Utils/styles';

const nameReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.length>3};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.length>3};
  }
  return {value:'', isValid:false };
};


export default function CreateNote(){
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))

  const initialContent=localStorage.getItem('Note')
  const [editorContent,setEditorContent]=useState(initialContent)
  
  
  const path=['/pacientes/menu/acompanhamento/notas/'+id,'/pacientes/menu/acompanhamento/'+id]
  
  const [nameState,dispatchName] = useReducer(nameReducer,{
    value:'',
    isValid: null,
  });
  const {isValid: nameIsValid } = nameState;
  const nameChangeHandler = (event) => {
    dispatchName({type:'USER_INPUT', val:event.target.value});
  };
  const validateNameHandler = () => {
    dispatchName({type:'INPUT_BLUR'});
  };

  async function submitHandler() {
    const data = {
      nome: nameState.value,
      texto: editorContent,
      pacientId: id,
    }
    await api.post(`/anotacoesmedicas/create/${2}`, data);
      console.log(editorContent,nameState.value)
      localStorage.setItem('Note',editorContent)
    }
  return(
    <>
    <Head title="Terapeutas Cannábicos - Criar anotação" description="Descrição da criação de anotação"/>
    <Header/>
    <ContainerBg>
      <TitleContainer>
        <Title active={true}>ACOMPANHAMENTO</Title>
      </TitleContainer>

      <InnerContainerBg>

      <Return destiny={path[0]}/>
      <SubTitle>Lembre sempre de salvar seu texto clicando no botão abaixo.</SubTitle>
      <InputReverse placeholder='Nome' value={nameState.value} onChange={nameChangeHandler} onBlur={validateNameHandler} validation={nameState.isValid}/>
        <SunEditor
          lang='pt_br' 
          width='80%'
          height='600px'
          autoFocus={true}
          setOptions={{buttonList:[["undo",
          "redo",
          "font",
          "fontSize",
          "formatBlock",
          "paragraphStyle",
          "blockquote",
          "bold",
          "underline",
          "italic",
          "strike",
          "subscript",
          "superscript",
          "fontColor",
          "hiliteColor",
          "textStyle",
          "removeFormat",
          "outdent",
          "indent",
          "align",
          "horizontalRule",
          "list",
          "lineHeight",
          "table",
          "link",
          "preview",
          "print",
          //"save",
          //"template"
        ]]}}  
          //setContents={initialContent}
          onChange={setEditorContent}
        />
     

      <Button onClick={submitHandler} isValid={nameState.isValid}>SALVAR</Button>
      </InnerContainerBg>
    </ContainerBg>
    
    </>
  )
}