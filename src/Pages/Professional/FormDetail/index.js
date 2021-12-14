import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import api from "../../../Services/api";
import Header from '../../../Components/Header';
import Return from '../../../Components/Return';
import Modal from '../../../Components/Modal';

import {
  ContainerBg,
  InnerContainerBg,
  FormData,
  FormDate,
  FormTitle,
  Question,
  QuestionOptions,
  Option,
  CheckedButton,
  ModalConfirmationContent,
  SendFormButton
} from './styles';

const fakeForm = {
  id: 1,
  name: "Formulario 1",
  category: "medico",
  questions: [
    {
      id: 1,
      type: "discursiva",
      text: "Qual é seu nome?",
      answer: "Júlio"
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
          checked: true,
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
          checked: true,
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

export function FormDetail() {
  const { formId, type, userId } = useParams()
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSendingForm, setIsSending] = useState(false)
  const returnPath = `/pacientes/menu/acompanhamento/fichas/${userId}`
  useEffect(() => {
    const fetchForm = async () => {
      setIsLoading(true);
      //const response = await api.get("") // verificar o endpoint
      //setForm(response.data);
      setTimeout(() => {
        setForm(fakeForm);
        setIsLoading(false)

      }, 1000);
    }
    fetchForm();
  }, [])

  const handleSendForm = () => {
    setIsSending(true);
    console.log("sending")
    setTimeout(() => {
      setIsSending(false);
      setIsModalOpen(false);
    }, 1000);
  }

  const ConfirmationModal = () => {
    return (
      <Modal onClose={() => setIsModalOpen(false)} width="400px" height="250px">
        <ModalConfirmationContent>
          <h2>Deseja mesmo enviar esse formulário? </h2>
          <div>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
            <button onClick={handleSendForm}>
              {isSendingForm ?
                <ReactLoading type="bubbles" color="#fff" width={"20%"} /> :
                "Enviar"
              }
            </button>
          </div>
        </ModalConfirmationContent>
      </Modal>
    )
  }


  return (
    <>
      <Header />
      <ContainerBg>
        {isModalOpen && <ConfirmationModal />}
        <InnerContainerBg>
          <Return destiny={returnPath}/>
          {
            isLoading ?
              <ReactLoading
                type="spin"
                width={60}
                height={60}
                color="#789D55" /> :
              <FormData>
                {console.log(form)}
                <FormTitle>{form.name}</FormTitle>
                <FormDate>
                {
                  type === "disponivel" ?
                    <p>Última edição: {form.lastEdition.toLocaleDateString()}</p> :
                    type === "enviado" ?
                      <p>Enviado em: {form.sentAt.toLocaleDateString()}</p> :
                      type === "respondido" ?
                        <p>Respondido em: {form.answeredAt.toLocaleDateString()}</p> : null
                }
                </FormDate>
                {form.questions.map(question => {
                  return (
                    <Question key={question.id}>
                      <h4>{question.text}</h4>
                      {
                        question.type === "discursiva" && type === "respondido" &&
                        <p>R: <span>{question.answer}</span></p>
                      }
                      <QuestionOptions>
                        {question.options?.map(option => {
                          return (
                            <Option key={option.id}>
                              <CheckedButton checked={option.checked && type==="respondido"}>
                                <div />
                              </CheckedButton>
                              <p>{option.text}</p>
                            </Option>
                          )
                        })}
                      </QuestionOptions>
                    </Question>
                  )
                })}
                {type === "disponivel" && (
                  <SendFormButton onClick={() => setIsModalOpen(true)}>
                   Enviar formulário
                  </SendFormButton>
                )}
              </FormData>
          }
        </InnerContainerBg>
      </ContainerBg>

    </>
  );
}