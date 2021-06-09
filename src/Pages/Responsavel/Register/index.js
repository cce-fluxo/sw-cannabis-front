import React,{useEffect,useState,useReducer} from 'react';
import {useDropzone} from 'react-dropzone';
import Return from '../../../Components/Return';
import Head from '../../../Components/Head';
import Header from '../../../Components/Header';
import {Link} from 'react-router-dom';
import { Card, InnerContainerBg, ProfileBg,Title, TitleContainer, CheckDiv,CheckTitle,Checkbox, UploadContainer, UploadButton } from './styles';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import {InputContainer} from '../Dados/styles';
import { Button } from '../../../Utils/styles';


function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <UploadContainer>
      <UploadButton>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>{props.title}</p>
      </div>
      </UploadButton>
      <aside>
        
        <h4>Arquivos:</h4>
        <ul>{files}</ul>
        
      </aside>
    
    </UploadContainer>
  );
}


const nameReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
  }
  return {value:'', isValid:false };
};

const lastNameReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
  }
  return {value:'', isValid:false };
};
const birthReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===10};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===10};
  }
  return {value:'', isValid:false };
};
const cpfReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===14};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===14};
  }
  return {value:'', isValid:false };
};

const rgReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===12};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===12};
  }
  return {value:'', isValid:false };
};
const cityReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>3 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>3};
  }
  return {value:'', isValid:false };
};
const estadoReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===2 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===2};
  }
  return {value:'', isValid:false };
};
const cepReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>3 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>3};
  }
  return {value:'', isValid:false };
};
const adressReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>3 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>3};
  }
  return {value:'', isValid:false };
};
const compReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>3 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>3};
  }
  return {value:'', isValid:false };
};
const numReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>1 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>1};
  }
  return {value:'', isValid:false };
};


export default function Register(){
  const [formIsValid, setFormIsValid] = useState(false);
  const [test,setTest]=useState('')
  
  const teste = () => {
    if (document.querySelector('#adress').checked){
      setTest('endereço')
    }
    else{
      setTest('')
    }
  }

  const [nameState,dispatchName] = useReducer(nameReducer,{
    value:'',
    isValid: null,
  });
  const [lastNameState,dispatchLastName] = useReducer(lastNameReducer,{
    value:'',
    isValid: null,
  });
  const [birthState,dispatchBirth] = useReducer(birthReducer,{
    value:'',
    isValid: null,
  });
  const [cpfState,dispatchCpf] = useReducer(cpfReducer,{
    value:'',
    isValid: null,
  });

  const [rgState,dispatchRg] = useReducer(rgReducer,{
    value:'',
    isValid: null,
  });
  const [cityState,dispatchCity] = useReducer(cityReducer,{
    value:'',
    isValid: null,
  });
  const [estadoState,dispatchEstado] = useReducer(estadoReducer,{
    value:'',
    isValid: null,
  });
  const [cepState,dispatchCep] = useReducer(cepReducer,{
    value:'',
    isValid: null,
  });
  const [adressState,dispatchAdress] = useReducer(adressReducer,{
    value:'',
    isValid: null,
  });
  const [compState,dispatchComp] = useReducer(compReducer,{
    value:'',
    isValid: null,
  });
  const [numState,dispatchNum] = useReducer(numReducer,{
    value:'',
    isValid: null,
  });
  
  const {isValid: nameIsValid } = nameState;
  const {isValid: lastNameIsValid } = lastNameState;
  const {isValid: birthIsValid } = birthState;
  const {isValid: cpfIsValid } = cpfState;
  const {isValid: rgIsValid } = rgState;
  const {isValid: cityIsValid } = cityState;
  const {isValid: estadoIsValid } = estadoState;
  const {isValid: cepIsValid } = cepState;
  const {isValid: numIsValid } = numState;
  const {isValid: adressIsValid } = adressState;
  const {isValid: compIsValid } = compState;
  
  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log('Checking form validity!');
      setFormIsValid(
       nameIsValid && lastNameIsValid && birthIsValid && cpfIsValid && rgIsValid && cityIsValid && estadoIsValid && cepIsValid && numIsValid && adressIsValid && compIsValid
      );
    }, 500);

    return () => {
      //console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [ nameIsValid,lastNameIsValid,birthIsValid,cpfIsValid, rgIsValid,cityIsValid,estadoIsValid , cepIsValid , numIsValid , adressIsValid , compIsValid]); 


  const nameChangeHandler = (event) => {
    dispatchName({type:'USER_INPUT', val:event.target.value});
  };
  const lastNameChangeHandler = (event) => {
    dispatchLastName({type:'USER_INPUT', val:event.target.value});
  };
  const birthChangeHandler = (event) => {
    dispatchBirth({type:'USER_INPUT', val:birthMask(event.target.value)});
  };
  const cpfChangeHandler = (event) => {
    dispatchCpf({type:'USER_INPUT', val:cpfMask(event.target.value)});
  };
  const rgChangeHandler = (event) => {
    dispatchRg({type:'USER_INPUT', val:rgMask(event.target.value)});
  };
  const cityChangeHandler = (event) => {
    dispatchCity({type:'USER_INPUT', val:event.target.value});
  };
  const estadoChangeHandler = (event) => {
    dispatchEstado({type:'USER_INPUT', val:event.target.value.toUpperCase()});
  };
  const cepChangeHandler = (event) => {
    dispatchCep({type:'USER_INPUT', val:cepMask(event.target.value)});
  };
  const numChangeHandler = (event) => {
    dispatchNum({type:'USER_INPUT', val:event.target.value});
  };
  const adressChangeHandler = (event) => {
    dispatchAdress({type:'USER_INPUT', val:event.target.value});
  };
  const compChangeHandler = (event) => {
    dispatchComp({type:'USER_INPUT', val:event.target.value});
  };

  const validateNameHandler = () => {
    dispatchName({type:'INPUT_BLUR'});
  };
  const validateLastNameHandler = () => {
    dispatchLastName({type:'INPUT_BLUR'});
  };
  const validateBirthHandler = () => {
    dispatchBirth({type:'INPUT_BLUR'});
  };
  const validateCpfHandler = () => {
    dispatchCpf({type:'INPUT_BLUR'});
  };
  const validateRgHandler = () => {
    dispatchRg({type:'INPUT_BLUR'});
  };
  const validateCityHandler = () => {
    dispatchCity({type:'INPUT_BLUR'});
  };
  const validateEstadoHandler = () => {
    dispatchEstado({type:'INPUT_BLUR'});
  };
  const validateCepHandler = () => {
    dispatchCep({type:'INPUT_BLUR'});
  };
  const validateNumHandler = () => {
    dispatchNum({type:'INPUT_BLUR'});
  };
  const validateAdressHandler = () => {
    dispatchAdress({type:'INPUT_BLUR'});
  };
  const validateCompHandler = () => {
    dispatchComp({type:'INPUT_BLUR'});
  };

  
const cpfMask = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

const birthMask = value => {
  return value
  .replace(/\D/g, '') 
  .replace(/(\d{2})(\d{2})/, '$1/$2') 
  .replace(/(\d{2})(\d)/, '$1/$2')
  //.replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(\d{4})\d+?$/, '$1') 
}

const rgMask = value=>{
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1') 
}

const cepMask = value=>{
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{1,2})/, '$1-$2') 
    .replace(/(-\d{3})\d+?$/, '$1')
}

  return(
    <>
    <Head title='Terapeutas Cannábicos - Registro de novo paciente'/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Link to='/perfil/dados'><Title>DADOS</Title></Link>
        <Link to='/perfil/pacientes'><Title active={true}>PACIENTES</Title></Link>
      </TitleContainer>
      <InnerContainerBg>
        <Return destiny='/perfil/pacientes'/>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse value={nameState.value} onChange={nameChangeHandler} onBlur={validateNameHandler} validation={nameState.isValid} />
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse value={lastNameState.value} onChange={lastNameChangeHandler} onBlur={validateLastNameHandler} validation={lastNameState.isValid} />
        </InputDiv>
        <InputDiv>
          <InputTitle>Data de nascimento:</InputTitle>
          <InputReverse value={birthState.value} onChange={birthChangeHandler} onBlur={validateBirthHandler} validation={birthState.isValid} />
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse value={cpfState.value} onChange={cpfChangeHandler} onBlur={validateCpfHandler} validation={cpfState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse value={rgState.value} onChange={rgChangeHandler} onBlur={validateRgHandler} validation={rgState.isValid}/>
        </InputDiv>
        <Basic title='envio de identidade (frente e verso)'/>
        <InputDiv>
          <InputTitle>Diagnóstico:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <Basic title='Laudo médico'/>
        <Basic title='Receita'/>
        <CheckDiv>
          <CheckTitle>Gostaria de utilizar os dados <br/>residenciais do responsável?</CheckTitle>
          <Checkbox type='checkbox' id='adress' value='endereço' onClick={teste}/>
        </CheckDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse style={{'width':'300px'}} placeholder={test}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse style={{'width':'100px'}} placeholder={test}/>
          </InputDiv>
        </InputContainer>
        <InputDiv>
          <InputTitle>CEP:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Endereço:</InputTitle>
          <InputReverse autoComplete='off' placeholder=''/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Número:</InputTitle>
            <InputReverse style={{'width':'100px'}} placeholder=''/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse style={{'width':'300px'}} placeholder=''/>
          </InputDiv>
        </InputContainer>
        <Button disabled={!formIsValid}>REGISTRAR PACIENTE</Button>
      </InnerContainerBg>
    </ProfileBg>

    </>
  )
}