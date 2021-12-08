import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import api from '../../../Services/api';
import { Card, ContainerBg, CardName, InnerContainerBg, CardContainer } from '../Pacients/styles';
import { Title, TitleContainer, SubTitle } from '../../../Pages/Professional/Profile/styles';
import Plus from '../../../Assets/plus.svg';
import Nota from '../../../Assets/notes.svg';

export default function MenuNotes() {
  const fullUrl = window.location.pathname
  const id = parseInt(fullUrl.slice(-1))
  const path = ['/pacientes/menu/acompanhamento/criar-nota/' + id, '/pacientes/menu/acompanhamento/' + id]
  const [notes, setNotes] = useState([
    { nome: 'Anotação 1', text: "<p>thrhtrhthtrhtrhtrhtrh</p>", data: '20/02/2021', id: 1 },
    { nome: 'Anotação 2', text: "<p>thrhtrhthtrhtrhtrhtrh</p>", data: '26/02/2021', id: 2 },
    { nome: 'Anotação 3', text: "<p>thrhtrhthtrhtrhtrhtrh</p>", data: '12/03/2021', id: 3 },
    { nome: 'Anotação 4', text: "<p>thrhtrhthtrhtrhtrhtrh</p>", data: '21/02/2021', id: 4 }
  ])


  const fetchNotes = async () => {
    // TODO: Rever a rota e se os campos passados estão de acordos
    try {
      const response = await api.get('/anotacoesmedicas/lista/');
      //setNotes(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    //fetchNotes();
  }, [])

  const first = false
  const NoPacients = () => {
    return (
      <>
        <SubTitle>Você ainda não possui nenhuma anotação criada para esse paciente. Clique no card abaixo para criar uma.</SubTitle>
        <Link to={path[0]}><Card><img src={Plus} alt='Registrar paciente' /></Card></Link>
      </>
    )
  }



  const list = notes.map(function (item) {
    const pathname = '/pacientes/menu/acompanhamento/ver-nota/' + item.id
    return (
      <Link to={{ pathname, state:item }}>
        <Card key={item.id}>
          <CardName>
            <img src={Nota} alt="nota" /><br />
            <p>Nome: {item.nome}</p>
            <p>Última edição: {item.data}</p>
          </CardName>
        </Card>
      </Link>
    )
  })

  const DisplayCards = () => {
    return (
      <CardContainer>
        {list}
        <Link to={path[0]}><Card><img src={Plus} alt='Plus Sign' /></Card></Link>
      </CardContainer>
    )
  }
  return (
    <>
      <Head title="Terapeutas Cannábicos - Menu de anotações" description="Descrição do menu de anotações" />
      <Header />
      <ContainerBg>
        <TitleContainer>
          <Title active={true}>ACOMPANHAMENTO</Title>
        </TitleContainer>
        <InnerContainerBg>
          <Return destiny={path[1]} />
          {first ? <NoPacients /> : <DisplayCards />}

        </InnerContainerBg>
      </ContainerBg>

    </>
  )
}