import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header';
import { InnerContainerBg, ContainerBg, Card, CardName, CardDate, EditButton, AddButton, StyledSelect } from './styles';
import { Title } from '../../../Utils/styles';
import { BiPencil, BiPlus } from "react-icons/bi"
import { useHistory } from 'react-router';
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

export function Forms() {
  const history = useHistory()
  const [category, setCategory] = useState("")
  const [forms, setForms] = useState([])

  useEffect(() => {
    if (category) {
      //Get forms in api
      const forms = fakeForms.filter(form => form.category === category)
      if (forms) {
        const formatedForms = forms.map(form => {
          return {
            ...form,
            lastEdition: form.lastEdition.toLocaleDateString()
          }
        })
        setForms(formatedForms)
      }
    }
    else {
      setForms([])
    }
  }, [category])

  const handleEditForm = (id) => {
    console.log(id)
  }
  const handleAddForm = () => {
    history.push(`criar-formulario/${category}`)
  }

  return (
    <>
      <Header />
      <ContainerBg>
        <Title underline={true}>FORMULÁRIOS</Title>
        <InnerContainerBg>
          <StyledSelect value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="medico">Médico</option>
            <option value="nutricionista">Nutricionista</option>
            <option value="fisioterapeuta">Fisioterapeuta</option>
          </StyledSelect>
          {
            forms.map(form => (
              <Card key={form.id}>
                <EditButton onClick={() => handleEditForm(form.id)}>
                  <BiPencil color="#fff" />
                </EditButton>
                <div>
                  <CardName>{form.name}</CardName>
                  <h2>{form.questions.length} perguntas</h2>
                  <CardDate>Última edição:
                    <span>{form.lastEdition}</span>
                  </CardDate>
                </div>
              </Card>
            ))
          }
          {
            category &&
            <Card>
              <AddButton onClick={handleAddForm}>
                <BiPlus color="#fff" size="24px" />
              </AddButton>
            </Card>
          }

        </InnerContainerBg>
      </ContainerBg>
    </>
  );
}