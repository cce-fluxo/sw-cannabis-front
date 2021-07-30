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
    return {value:action.val, isValid: action.val.trim().length===14 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===14 };
  }
  return {value:'', isValid:false };
};

const cpfReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===14  };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===14 };
  }
  return {value:'', isValid:false };
};

const rgReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===12 };
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
    return {value:state.value, isValid: state.value.trim().length>3 };
  }
  return {value:'', isValid:false };
};

const estadoReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===2 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===2 };
  }
  return {value:'', isValid:false };
};

const cepReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>3 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>3 };
  }
  return {value:'', isValid:false };
};

const adressReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>3 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>3 };
  }
  return {value:'', isValid:false };
};

const numReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>1 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>1 };
  }
  return {value:'', isValid:false };
};

const compReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>3 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>3 };
  }
  return {value:'', isValid:false };
};




export default function Dados(){
  const {userInfo,onDataChange} = useContext(AuthContext)
  const [formIsValid, setFormIsValid] = useState(false);
  

  const [cellphoneState,dispatchCellphone] = useReducer(cellphoneReducer,{
    value:userInfo.telefone_secundario,//
    isValid: true,
  });
  const [cpfState,dispatchCpf] = useReducer(cpfReducer,{
    value:'',
    isValid: true,
  });

  const [rgState,dispatchRg] = useReducer(rgReducer,{
    value:'',
    isValid: true,
  });
  const [cityState,dispatchCity] = useReducer(cityReducer,{
    value:userInfo.cidade,
    isValid: true,
  });
  const [estadoState,dispatchEstado] = useReducer(estadoReducer,{
    value:userInfo.estado,
    isValid: true,
  });
  const [cepState,dispatchCep] = useReducer(cepReducer,{
    value:userInfo.cep,
    isValid: true,
  });
  const [adressState,dispatchAdress] = useReducer(adressReducer,{
    value:userInfo.endereco,
    isValid: true,
  });
  const [compState,dispatchComp] = useReducer(compReducer,{
    value:userInfo.complemento,
    isValid: true,
  });
  const [numState,dispatchNum] = useReducer(numReducer,{
    value:userInfo.numero,
    isValid: true,
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
       cellphoneIsValid && cityIsValid && estadoIsValid && cepIsValid && numIsValid && adressIsValid && compIsValid
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
  onDataChange(cellphoneState.value,cityState.value,estadoState.value,numState.value,adressState.value,compState.value,cepState.value)
  //window.location.reload()
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
          <InputReverse disabled placeholder={userInfo.nome}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled placeholder={userInfo.sobrenome}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Email:</InputTitle>
          <InputReverse disabled placeholder={userInfo.email}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone celular:</InputTitle>
          <InputReverse disabled placeholder={userInfo.celular}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Telefone secundário:</InputTitle>
          <InputReverse autoComplete='off' value={cellphoneState.value} onChange={cellphoneChangeHandler} onBlur={validateCellphoneHandler} validation={cellphoneState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse  placeholder={userInfo.cpf} disabled/>
        </InputDiv>
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse placeholder={userInfo.rg} disabled/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Cidade:</InputTitle>
            <InputReverse style={{'width':'300px'}} value={cityState.value} onChange={cityChangeHandler} onBlur={validateCityHandler} validation={cityState.isValid}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Estado:</InputTitle>
            <InputReverse style={{'width':'100px'}} maxLength='2' value={estadoState.value} onChange={estadoChangeHandler} onBlur={validateEstadoHandler} validation={estadoState.isValid}/>
          </InputDiv>
        </InputContainer>
        <InputDiv>
          <InputTitle>CEP:</InputTitle>
          <InputReverse autoComplete='off' value={cepState.value} onChange={cepChangeHandler} onBlur={validateCepHandler} validation={cepState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Endereço:</InputTitle>
          <InputReverse autoComplete='off' value={adressState.value} onChange={adressChangeHandler} onBlur={validateAdressHandler} validation={adressState.isValid}/>
        </InputDiv>
        <InputContainer>
          <InputDiv>
            <InputTitle>Nº:</InputTitle>
            <InputReverse style={{'width':'100px'}} value={numState.value} onChange={numChangeHandler} onBlur={validateNumHandler} validation={numState.isValid}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse style={{'width':'300px'}}  value={compState.value} onChange={compChangeHandler} onBlur={validateCompHandler} validation={compState.isValid}/>
          </InputDiv>
        </InputContainer>
        <Button type='submit' onClick={submitHandler} disabled={!formIsValid}>SALVAR</Button>
      </InnerContainerBg>
    </ProfileBg>

    </>
  )
}