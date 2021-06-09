import React,{useContext,useEffect,useState,useReducer} from 'react';
import Head from '../../../Components/Head';
import Return from '../../../Components/Return';
import Header from '../../../Components/Header';
import {Link} from 'react-router-dom';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import {InnerContainerBg, InputContainer, ProfileBg,Title, TitleContainer } from './styles';
import { Button } from '../../../Utils/styles';
import AuthContext from '../../../Storage/auth-context';

const cellphoneReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===14};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===14};
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

const numReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>1 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>1};
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




export default function Dados(){
  const {userInfo} = useContext(AuthContext)
  const [formIsValid, setFormIsValid] = useState(false);

  const [cellphoneState,dispatchCellphone] = useReducer(cellphoneReducer,{
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
  const {isValid: cellphoneIsValid } = cellphoneState;
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
       cellphoneIsValid && cpfIsValid && rgIsValid && cityIsValid && estadoIsValid && cepIsValid && numIsValid && adressIsValid && compIsValid
      );
    }, 500);

    return () => {
      //console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [cellphoneIsValid, cpfIsValid, rgIsValid,cityIsValid,estadoIsValid , cepIsValid , numIsValid , adressIsValid , compIsValid]); 

  const cellphoneChangeHandler = (event) => {
    dispatchCellphone({type:'USER_INPUT', val:celMask(event.target.value)});
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

  const validateCellphoneHandler = () => {
    dispatchCellphone({type:'INPUT_BLUR'});
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

const rgMask = value=>{
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1') 
}

const telMask = value=>{
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2') 
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const cepMask = value=>{
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{1,2})/, '$1-$2') 
    .replace(/(-\d{3})\d+?$/, '$1')
}

const celMask = value=>{
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2') 
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const submitHandler = (event) => {
  event.preventDefault();
  
  console.log(cellphoneState.value,cpfState.value,rgState.value);
  
};

  return(

    <>
    <Head title="Terapeutas Cannábicos - Dados dos perfil" description="Descrição do dados"/>
    <Header/>
    <ProfileBg>
      <TitleContainer>
        <Title active={true}>DADOS</Title>
        <Link to='/perfil/pacientes'><Title>PACIENTES</Title></Link>
      </TitleContainer>
      <InnerContainerBg>
        <Return destiny='/perfil'/>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse disabled placeholder='{userInfo.name}'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled placeholder='Godinho Souza Braga'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Email:</InputTitle>
          <InputReverse disabled placeholder='{userInfo.email}'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone celular:</InputTitle>
          <InputReverse disabled placeholder='(21)968009372'/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone secundário:</InputTitle>
          <InputReverse autoComplete='off' placeholder={cellphoneState.value} value={cellphoneState.value} onChange={cellphoneChangeHandler} onBlur={validateCellphoneHandler} validation={cellphoneState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse autoComplete='off' placeholder={cpfState.value} value={cpfState.value} onChange={cpfChangeHandler} onBlur={validateCpfHandler} validation={cpfState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse autoComplete='off' placeholder={rgState.value} value={rgState.value} onChange={rgChangeHandler} onBlur={validateRgHandler} validation={rgState.isValid}/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse style={{'width':'300px'}} placeholder={cityState.value} value={cityState.value} onChange={cityChangeHandler} onBlur={validateCityHandler} validation={cityState.isValid}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse style={{'width':'100px'}} maxLength='2' placeholder={estadoState.value} value={estadoState.value} onChange={estadoChangeHandler} onBlur={validateEstadoHandler} validation={estadoState.isValid}/>
          </InputDiv>
        </InputContainer>
        <InputDiv>
          <InputTitle>CEP:</InputTitle>
          <InputReverse autoComplete='off' placeholder={cepState.value} value={cepState.value} onChange={cepChangeHandler} onBlur={validateCepHandler} validation={cepState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Endereço:</InputTitle>
          <InputReverse autoComplete='off' placeholder={adressState.value} value={adressState.value} onChange={adressChangeHandler} onBlur={validateAdressHandler} validation={adressState.isValid}/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Nº:</InputTitle>
            <InputReverse style={{'width':'100px'}} placeholder={numState.value} value={numState.value} onChange={numChangeHandler} onBlur={validateNumHandler} validation={numState.isValid}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse style={{'width':'300px'}} placeholder={compState.value} value={compState.value} onChange={compChangeHandler} onBlur={validateCompHandler} validation={compState.isValid}/>
          </InputDiv>
        </InputContainer>
        <Button type='submit' onClick={submitHandler} disabled={!formIsValid}>ALTERAR DADOS</Button>
      </InnerContainerBg>
    </ProfileBg>

    </>
  )
}