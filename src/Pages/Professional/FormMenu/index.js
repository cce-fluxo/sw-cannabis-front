import React, { useState, useEffect } from 'react';
import ReactLoading from "react-loading"
import { FiSend } from "react-icons/fi"
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';

import {
  ActionButton,
  Card,
  CardDate,
  CardName,
  ContainerBg,
  DetailButton,
  InnerContainerBg,
  ModalConfirmationContent
} from './styles';
import { Title, TitleContainer, SubTitle } from '../../../Pages/Professional/Profile/styles';
import { MenuDiv, MenuTitle } from '../../../Pages/Responsavel/MenuPacient/styles';
import Return from '../../../Components/Return';
import Modal from '../../../Components/Modal';
const fakeForms = [
  {
    id: 1,
    name: "Formulario 1",
    category: "medico",
    questions: [
      {
        id: 1,
        type: "discursiva",
        text: "Qual é seu nome"
      },
      {
        id: 2,
        type: "objetiva",
        text: "Quantos anos você tem?",
        options: [
          {
            id: 1,
            text: 12,
          },
          {
            id: 2,
            text: 13,
          }
        ]
      },
      {
        id: 3,
        type: "multipla",
        text: "O que você comeu hoje",
        options: [
          {
            id: 1,
            text: "carne",
          },
          {
            id: 2,
            text: "pao",
          }
        ]
      }
    ],
    lastEdition: new Date()
  }
]



const PendingCard = ({ form }) => {
  return (
    <Card>
      <CardName>{form.name}</CardName>
    </Card>
  )
}


const AnsweredCard = () => {
  return (
    <>


    </>
  )
}
const AvailableCard = ({ form }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleSendForm = () => {
    console.log("sending")
  }
  const ConfirmationModal = () => {
    return (
      <Modal onClose={()=>setIsModalOpen(false)} width="400px" height="250px">
        <ModalConfirmationContent>
          <h2>Deseja mesmo enviar esse formulário? </h2>
          <div>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
            <button onClick={handleSendForm}>Enviar</button>
          </div>
        </ModalConfirmationContent>
      </Modal>
    )
  }

  return (
    <Card>
      {
        isModalOpen && <ConfirmationModal />
        
      }
      <ActionButton onClick={()=>setIsModalOpen(true)}>
        <FiSend size={30} color="#fff" style={{ marginTop: "5px", marginRight: "5px" }} />
      </ActionButton>
      <div>
        <CardName>
          {form.name}
        </CardName>
        <CardDate>{form.questions.length} questões</CardDate>
        <CardDate>Ultima edição: {form.lastEdition.toLocaleDateString()}</CardDate>
        <DetailButton>Ver detalhes</DetailButton>

      </div>
    </Card>
  )
}




export default function FormMenu(props) {

  const fullUrl = window.location.pathname
  const id = parseInt(fullUrl.slice(-1))
  const path = '/pacientes/menu/acompanhamento/' + id
  const [category, setCategory] = useState("available")
  const [forms, setForms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    if (active) {
      setLoading(true)
      if (category === "available") {
        setForms(fakeForms)
      }
      else if (category === "pending") {
        setForms([])
      }
      else if (category === "answered") {
        setForms([])
      }
      setTimeout(() => setLoading(false), 2000)
    }
    return () => active = false



  }, [category])


  


  const DisplayCards = () => {
    if (loading) {
      return <ReactLoading type="spin" width={30} height={30} color="#789D55" />
    }
    if (forms.length === 0) {
      return (
        <h4>Nenhum formulário disponível</h4>
      )
    }
    return (
      <>

        {forms.map(form => {
          return (
            category === "pending" ?
              <PendingCard form={form} key={form.id} /> :
              category === "answered" ?
                <AnsweredCard form={form} key={form.id} /> :
                <AvailableCard form={form} key={form.id} />
          )
        })

        }
      </>
    )
  }




  return (
    <>
      <Head title="Terapeutas Cannábicos - Menu do paciente" description="Descrição do menu do paciente" />
      <Header />
      <ContainerBg>
        <TitleContainer>
          <Title active={true}>ACOMPANHAMENTO</Title>
        </TitleContainer>
        <InnerContainerBg>
          <Return destiny={path} />
          <MenuDiv>
            <MenuTitle
              onClick={() => setCategory("available")}
              active={category === "available"}
            >
              Disponíveis
            </MenuTitle>
            <MenuTitle
              onClick={() => setCategory("pending")}
              active={category === "pending"}
            >
              Enviadas
            </MenuTitle>
            <MenuTitle
              onClick={() => setCategory("answered")}
              active={category === "answered"}
            >
              Respondidas
            </MenuTitle>
          </MenuDiv>
          <DisplayCards />


        </InnerContainerBg>
      </ContainerBg>
    </>
  )
}