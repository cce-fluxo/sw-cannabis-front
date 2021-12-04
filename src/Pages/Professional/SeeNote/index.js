import SunEditor, { buttonList } from 'suneditor-react';
//import suneditor from 'suneditor';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import {useHistory} from "react-router-dom"
import React,{useState,useReducer, useEffect} from 'react';
import {InputReverse} from '../../../Components/Input/styles';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { ContainerBg,InnerContainerBg} from '../Pacients/styles';
import {Title,TitleContainer, SubTitle} from '../../../Pages/Professional/Profile/styles';
import { Button, ButtonSmall } from '../../../Utils/styles';
import api from '../../../Services/api';

const nameReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.length>3};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.length>3};
  }
  return {value:'', isValid:false };
};

export default function SeeNote(props) {
  const {state} = props.location
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  const history = useHistory();

  const [editorContent,setEditorContent]=useState(state.text)

  const [nameState,dispatchName] = useReducer(nameReducer,{
    value: state.nome,
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
    // TODO: Rever o path e os campos
    // const data = {
    //   text: editorContent,
    //   nome: nameState.value
    // }
    // try {
    //   const path = `/anotacoesmedicas/details/{anotacoesmedico_id}/{medico_id}${id}`
    //   await api.put( path, data)
    // }
    // catch (err) {
    //   console.log(err)
    // }
      history.push('/pacientes/menu/acompanhamento/notas/'+id)
    }
    
  async function handleRemoveNote() {
    // TODO: Rever path
    // try {
    //   await api.delete(`/anotacoesmedicas/details/{anotacoesmedico_id}/{medico_id}${id}`)
    // }
    // catch (err) {
    //   console.log(err)
    // }
    history.push('/pacientes/menu/acompanhamento/notas/'+id)
  }
  
  const path=['/pacientes/menu/acompanhamento/notas/'+id,'/pacientes/menu/acompanhamento/'+id]
  

  return(
    <>
    <Head title="Terapeutas Cannábicos - Ver anotação" description="Ver anotação"/>
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
          defaultValue={editorContent}
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
          onChange={setEditorContent}
        />
     

      <ButtonSmall color='green' onClick={submitHandler}>Salvar</ButtonSmall>
      <ButtonSmall onClick={handleRemoveNote}>Excluir</ButtonSmall>
      </InnerContainerBg>
    </ContainerBg>
    
    </>
  )
}