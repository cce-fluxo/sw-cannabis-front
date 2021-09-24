import SunEditor,{buttonList} from 'suneditor-react';
//import suneditor from 'suneditor';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import React,{useState} from 'react';

import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { ContainerBg,InnerContainerBg} from '../Pacients/styles';
import {Title,TitleContainer, SubTitle} from '../../../Pages/Professional/Profile/styles';
import { Button, ButtonSmall } from '../../../Utils/styles';



export default function SeeNote(){
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))

  const initialContent=localStorage.getItem('Note1')
  const [editorContent,setEditorContent]=useState(initialContent)
  function submitHandler(content){
    console.log(content)
    localStorage.setItem('Note1',content)
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
          setContents={initialContent}
          onChange={setEditorContent}
        />
     

      <ButtonSmall color='green' onClick={() => submitHandler(editorContent)}>Salvar</ButtonSmall>
      <ButtonSmall>Excluir</ButtonSmall>
      </InnerContainerBg>
    </ContainerBg>
    
    </>
  )
}