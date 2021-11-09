import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { Card, ContainerBg, CardName, InnerContainerBg ,CardContainer} from '../Pacients/styles';
import {Title,TitleContainer, SubTitle} from '../../../Pages/Professional/Profile/styles';
import Plus from '../../../Assets/plus.svg';
import Nota from '../../../Assets/notes.svg';

export default function MenuNotes(){
  const fullUrl=window.location.pathname
  const id=parseInt(fullUrl.slice(-1))
  const path=['/pacientes/menu/acompanhamento/criar-nota/'+id,'/pacientes/menu/acompanhamento/'+id]

  const first=false
  const NoPacients=()=>{
    return(
      <>
      <SubTitle>Você ainda não possui nenhuma anotação criada para esse paciente. Clique no card abaixo para criar uma.</SubTitle>
      <Link to={path[0]}><Card><img src={Plus} alt='Registrar paciente'/></Card></Link>
      </>
    )
  }

  const newList=[{nome:'Anotação 1',data:'20/02/2021', id:1},{nome:'Anotação 2',data:'26/02/2021', id:2},
  {nome:'Anotação 3',data:'12/03/2021', id:3},{nome:'Anotação 4',data:'21/02/2021', id:4}]
  
  const list=newList.map(function(item){
    const path='/pacientes/menu/acompanhamento/ver-nota/'+item.id
    return(
      <Link to={path}>
      <Card key={item.id}>
              <CardName>
                  <img src={Nota}/><br/>
                  <p>Nome: {item.nome}</p>
                  <p>Última edição: {item.data}</p>
              </CardName>
      </Card>
      </Link>
    )
  })

  const DisplayCards=()=>{
    return(
      <CardContainer>
      {list}
      <Link to={path[0]}><Card><img src={Plus} alt='Plus Sign'/></Card></Link>
      </CardContainer>
    )
  }
  return(
    <>
    <Head title="Terapeutas Cannábicos - Menu de anotações" description="Descrição do menu de anotações"/>
    <Header/>
    <ContainerBg>
      <TitleContainer>
        <Title active={true}>ACOMPANHAMENTO</Title>
      </TitleContainer>
      <InnerContainerBg>
      <Return destiny={path[1]}/>
      {first?<NoPacients/>:<DisplayCards/>}
      
      </InnerContainerBg>
    </ContainerBg>
    
    </>
  )
}