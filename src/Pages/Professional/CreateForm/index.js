import React, { useReducer, useState, useEffect } from 'react';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import { ContainerBg, InnerContainerBg } from '../Pacients/styles';
import { Title, TitleContainer } from '../../../Pages/Professional/Profile/styles';
import { InputReverse } from '../../../Components/Input/styles';
import { ModalDiv, Button, DivOption, InputOption, QuestionContainer, RadioContainer, RadioName, RadioOption, DownButton, RadioContainerBg, TypeContainer, TypeTitle, ButtonsContainer, UpButton, RemoveIcon, SmallInput, OptionContainer, QuestionBg } from './styles';
import BigModal from '../../../Components/BigModal';
import { OptContainer, WindowText, WindowTitle } from '../../Login/styles';
import Modal from '../../../Components/Modal';
import { v4 as uuidv4 } from 'uuid';


const questionReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 5 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 5 };
  }
  return { value: '', isValid: false };
};



const NotDiscursive = ({
  closeWindow,
  questionState,
  questionChangeHandler,
  validateQuestionHandler,
  optionsWindow,
  addOption,
  addQuestion,
  input,
  options,
  formIsValid
}) => {
  return (
    <BigModal onClose={closeWindow}>
      <InnerContainerBg>
        <ModalDiv>
          <WindowTitle>Criação de pergunta</WindowTitle>
          <InputReverse placeholder='Digite aqui sua pergunta'
            value={questionState.value}
            onChange={questionChangeHandler}
            onBlur={validateQuestionHandler}
            validation={questionState.isValid}
          />
          <DivOption>
            {optionsWindow}
          </DivOption>
          <Button color='green' onClick={() => addOption()}>Adicionar opção</Button>
          <Button color='green' onClick={() => addQuestion(questionState.value, input.value, options)} disabled={!formIsValid}>
            Adicionar pergunta
          </Button>
        </ModalDiv>
      </InnerContainerBg>
    </BigModal>
  )
}

export default function CreateForm() {

  const [questions, setQuestions] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [options, setOptions] = useState([{ id: uuidv4(), value: 'Digite a opção' }, { id: uuidv4(), value: 'Digite a opção' }]);
  const [modal, setModal] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false);
  const fullUrl = window.location.pathname
  const id = parseInt(fullUrl.slice(-1))
  const path = '/pacientes/menu/acompanhamento/' + id
  const [questionState, dispatchQuestion] = useReducer(questionReducer, {
    value: '',
    isValid: null,
  });
  useEffect(() => {
    console.log("render")
  }, [])

  const { isValid: questionIsValid } = questionState;
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

  const displayQuestions = questions.map((item) => {
    const displayOptions = item.options.map((item) => {
      return (
        <SmallInput placeholder={item.value} key={item.id} disabled />
      )
    })
    return (
      <QuestionBg>
        <QuestionContainer>
          <InputReverse placeholder={item.title} disabled />
          <ButtonsContainer>
            <UpButton onClick={() => handleMoveTop(item.id)} />
            <DownButton onClick={() => handleMoveDown(item.id)} />
            <RemoveIcon onClick={() => removeQuestion(item.id)} />
          </ButtonsContainer>
        </QuestionContainer>
        {item.options ? displayOptions : null}

      </QuestionBg>
    )
  })


  const questionChangeHandler = (event) => {
    dispatchQuestion({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateQuestionHandler = () => {
    dispatchQuestion({ type: 'INPUT_BLUR' });
  };

  const removeQuestion = (id) => {
    const filteredList = questions.filter(x => x.id !== id);
    setQuestions(filteredList)
  }

  const handleMoveTop = (id) => {
    const index = questions.findIndex(x => x.id === id);
    if (index === 0) {
      return
    }
    const firstPart = questions.slice(0, index - 1);
    const secondPart = questions.slice(index + 1)
    const newList = [...firstPart, questions[index], questions[index - 1], ...secondPart];
    setQuestions(newList)
  }
  const handleMoveDown = (id) => {
    const index = questions.findIndex(x => x.id === id);
    if (index === questions.length - 1) {
      return
    }
    const firstPart = questions.slice(0, index);
    const secondPart = questions.slice(index + 2)
    const newList = [...firstPart, questions[index + 1], questions[index], ...secondPart];
    setQuestions(newList)
  }

  const removeOption = (id) => {
    const index = options.findIndex(x => x.id === id);

    const filteredList = options.filter(function (i) {
      const check = options.indexOf(i);
      return check != index;
    });
    setOptions(filteredList)
  }



  const addQuestion = (title, type, options) => {
    if (type === 'discursive') {
      const newItem = { id: uuidv4(), title: title, type: type }
      const newList = questions.concat(newItem)
      setQuestions(newList)

    }
    else {
      const newItem = { id: uuidv4(), title: title, type: type, options: options }
      const newList = questions.concat(newItem)

      setQuestions(newList)
    }
    closeWindow()

  }

  const createQuestion = (type) => {
    setModal(true)
    console.log(questions)
  }


  const addOption = () => {
    const newItem = { id: uuidv4(), value: 'Digite a opção' }
    const newList = options.concat(newItem)
    setOptions(newList)
  }

  const changeHandler = () => {
    setIsChecked(true)

  }

  const closeWindow = () => {
    setModal(false);
    questionState.value = ''
    setFormIsValid(false)
    setOptions([{ id: uuidv4(), value: 'Digite a opção' }, { id: uuidv4(), value: 'Digite a opção' }]);
  }

  const optionsWindow = options.map((item) => {
    const changeHandler = (e) => {
      const index = options.findIndex(x => x.id === item.id);
      const newItem = e.currentTarget.value
      const newObject = options
      newObject[index].value = newItem
      setOptions(newObject)

    }
    return (
      <OptionContainer key={item.id}>
        <SmallInput placeholder={item.value} onChange={(e) => changeHandler(e)} />
        <RemoveIcon onClick={() => removeOption(item.id)} />
      </OptionContainer>
    )
  })

  const Discursive = () => {
    return (
      <Modal onClose={closeWindow}>
        <InnerContainerBg>
          <ModalDiv>
            <WindowTitle>Criação de pergunta</WindowTitle>
            <InputReverse placeholder='Digite aqui sua pergunta' value={questionState.value}
              onChange={questionChangeHandler} onBlur={validateQuestionHandler} validation={questionState.isValid} />

            <Button color='green' onClick={() => addQuestion(questionState.value, input.value)} disabled={!formIsValid}>Adicionar pergunta</Button>
          </ModalDiv>
        </InnerContainerBg>
      </Modal>
    )
  }



  const addQuestionWindow = () => {

    return (
      <>
        {
          input.value === 'discursive' ?
            <Discursive /> :
            <NotDiscursive
              closeWindow={closeWindow}
              questionState={questionState}
              questionChangeHandler={questionChangeHandler}
              validateQuestionHandler={validateQuestionHandler}
              optionsWindow={optionsWindow}
              addOption={addOption}
              addQuestion={addQuestion}
              options={options}
              input={input}
              formIsValid={formIsValid}

            />}
      </>
    )
  }


  const input = document.querySelector('input[type=radio]:checked')


  return (
    <>
      {modal ? addQuestionWindow() : null}
      <Head title="Terapeutas Cannábicos - Criação de ficha" description="Criação forms" />
      <Header />
      <ContainerBg>
        <TitleContainer>
          <Title active={true}>CRIAR FICHA</Title>
        </TitleContainer>
        <InnerContainerBg>
          <Return destiny={path} />

          <TypeTitle>Bem vindo à criação de formulários de acompanhamento! Escolha o tipo de pergunta desejada e clique no botão para criar a pergunta.</TypeTitle>
          <RadioContainerBg>
            <RadioContainer>
              <RadioOption>
                <input type="radio" id="discursive" name="question" value="discursive" onChange={changeHandler} />
                <RadioName for='discursive'>Pergunta discursiva</RadioName>
              </RadioOption>
              <RadioOption>
                <input type="radio" id="unique" name="question" value="unique" onChange={changeHandler} />
                <RadioName for='unique'>Pergunta objetiva (escolha única)</RadioName>
              </RadioOption>
              <RadioOption>
                <input type="radio" id="multiple" name="question" value="multiple" onChange={changeHandler} />
                <RadioName for='multiple'>Pergunta objetiva (múltipla escolha)</RadioName>
              </RadioOption>
            </RadioContainer>
            <Button color='green' onClick={() => createQuestion()} disabled={!isChecked} >Criar pergunta</Button>
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