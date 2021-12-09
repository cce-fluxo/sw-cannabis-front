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
  CardsContainer,
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
    lastEdition: new Date(),
    sentAt: new Date(),
    answeredAt: new Date(),
  },
  {
    id: 2,
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
    lastEdition: new Date(),
    sentAt: new Date(),
    answeredAt: new Date(),
  },
  {
    id: 3,
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
    lastEdition: new Date(),
    sentAt: new Date(),
    answeredAt: new Date(),
  }
]

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



const PendingCard = ({ form }) => {
  return (
    <Card>
      <div>
        <CardName>
          {form.name}
        </CardName>
        <CardDate>{form.questions.length} questões</CardDate>
        <CardDate>Data de envio: {form.sentAt.toLocaleDateString()}</CardDate>
        <DetailButton>Ver detalhes</DetailButton>

      </div>
    </Card>
  )
}


const AnsweredCard = ({form}) => {
  return (
    <Card>
      <div>
        <CardName>
          {form.name}
        </CardName>
        <CardDate>{form.questions.length} questões</CardDate>
        <CardDate>Data da resposta: {form.answeredAt.toLocaleDateString()}</CardDate>
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
        setForms(fakeForms)
      }
      else if (category === "answered") {
        setForms(fakeForms)
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
      <CardsContainer>

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
      </CardsContainer>
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