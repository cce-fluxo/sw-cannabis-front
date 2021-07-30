import React,{useState,useContext,useReducer,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Return from '../../../Components/Return';
import Header from '../../../Components/Header';
import Head from '../../../Components/Head';
import { ButtonDiv,  Checkbox,  CheckDiv,  CheckTitle,  InnerContainerBg, MenuDiv, MenuTitle, ProfileBg,Title, TitleContainer,ModalDiv,WindowText,WindowTitle } from './styles';
import {InputContainer} from '../Dados/styles';
import { InputDiv, InputReverse, InputTitle } from '../../../Components/Input/styles';
import { ButtonSmall } from '../../../Utils/styles';
import Modal from '../../../Components/Modal';
import AuthContext from '../../../Storage/auth-context';

const diagReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>3 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>3};
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

export default function MenuPacient(){
  const [formIsValid, setFormIsValid] = useState(false);
  const [windoww,setWindoww]=useState(false)
  const fullUrl=window.location.pathname
  const id=fullUrl.slice(23)
  console.log(id)
  const ctx=useContext(AuthContext)
  const paciente=ctx.getPacientInfo(id)
  console.log(paciente)
  const [test,setTest]=useState('')

  const teste = () => {
    if (document.querySelector('#adress').checked){
      dispatchCity({type:'USER_INPUT', val:ctx.userInfo.cidade})
      dispatchEstado({type:'USER_INPUT', val:ctx.userInfo.estado})
      dispatchCep({type:'USER_INPUT', val:ctx.userInfo.cep})
      dispatchAdress({type:'USER_INPUT', val:ctx.userInfo.endereco})
      dispatchComp({type:'USER_INPUT', val:ctx.userInfo.complemento})
      dispatchNum({type:'USER_INPUT', val:(ctx.userInfo.numero).toString()})
    }
  }

  const [diagState,dispatchDiag] = useReducer(diagReducer,{
    value:paciente.diagnostico,
    isValid: null,
  });

  const [cityState,dispatchCity] = useReducer(cityReducer,{
    value:paciente.cidade,
    isValid: null,
  });
  const [estadoState,dispatchEstado] = useReducer(estadoReducer,{
    value:paciente.estado,
    isValid: null,
  });
  const [cepState,dispatchCep] = useReducer(cepReducer,{
    value:paciente.cep,
    isValid: null,
  });
  const [adressState,dispatchAdress] = useReducer(adressReducer,{
    value:paciente.endereco,
    isValid: null,
  });
  const [compState,dispatchComp] = useReducer(compReducer,{
    value:paciente.complemento,
    isValid: null,
  });
  const [numState,dispatchNum] = useReducer(numReducer,{
    value:paciente.numero,
    isValid: null,
  });
  
  const {isValid: diagIsValid } = diagState;
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
       cityIsValid && estadoIsValid && cepIsValid && numIsValid && adressIsValid && compIsValid && diagIsValid
      );
    }, 500);

    return () => {
      //console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [ cityIsValid,estadoIsValid , cepIsValid , numIsValid , adressIsValid , compIsValid, diagIsValid]); 


  const diagChangeHandler = (event) => {
    dispatchDiag({type:'USER_INPUT', val:(event.target.value)});
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

  const validateDiagHandler = () => {
    dispatchDiag({type:'INPUT_BLUR'});
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

  const cepMask = value=>{
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{1,2})/, '$1-$2') 
      .replace(/(-\d{3})\d+?$/, '$1')
  }

  const removeHandler=()=>{
    ctx.onPacientRemove(id)
  }
  const showWindow=()=>{
    setWindoww(true)
  }
  const exclusão = () =>{
    return(
      <Modal onClose={() => setWindoww(false)}>
          <ModalDiv>
            <WindowTitle>Excluir Paciente</WindowTitle>
            <WindowText>ATENÇÃO: A exclusão de paciente é permanente. Tem certeza que deseja excluir esse paciente do seu perfil?</WindowText>
            <Link to='/perfil/pacientes'><ButtonSmall onClick={removeHandler}>Excluir</ButtonSmall></Link>
          </ModalDiv>
      </Modal>   
 ) 
}
  
  return(
    <>
    <Header/>
    <Head title="Terapeutas Cannábicos - Perfil do paciente" description="Descrição do pacientes"/>
    <ProfileBg>
      {windoww?exclusão():null}
      <TitleContainer>
        <Link to='/perfil/dados'><Title>DADOS</Title></Link>
        <Title active={true}>PACIENTES</Title>
      </TitleContainer>
      <InnerContainerBg>

        <Return destiny='/perfil/pacientes'/>
        <MenuDiv>
          <MenuTitle active={true}>Dados</MenuTitle>
          <MenuTitle>Pesquisas</MenuTitle>
          <MenuTitle>Fichas</MenuTitle>
        </MenuDiv>
        <InputDiv>
          <InputTitle>Nome:</InputTitle>
          <InputReverse disabled value={paciente.nome}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Sobrenome:</InputTitle>
          <InputReverse disabled value={paciente.sobrenome}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Data de nascimento:</InputTitle>
          <InputReverse disabled value={paciente.nascimento}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>CPF:</InputTitle>
          <InputReverse disabled value={paciente.cpf}/>
        </InputDiv>
        
        <InputDiv>
          <InputTitle>RG:</InputTitle>
          <InputReverse disabled value={paciente.rg}/>
        </InputDiv>
        <h1>envio de id</h1>
        
        <InputDiv>
          <InputTitle>Diagnóstico:</InputTitle>
          <InputReverse autoComplete='off' value={diagState.value} onChange={diagChangeHandler} onBlur={validateDiagHandler} validation={diagState.isValid}/>
        </InputDiv>
        <h1>laudo medico</h1>
        <h1>receita</h1>
        <CheckDiv>
          <CheckTitle>Gostaria de utilizar os dados <br/>residenciais do responsável?</CheckTitle>
          <Checkbox type='checkbox' id='adress' value='endereço' onClick={teste}/>
        </CheckDiv>
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
            <InputTitle>Número:</InputTitle>
            <InputReverse style={{'width':'100px'}} type='number' value={numState.value} onChange={numChangeHandler} onBlur={validateNumHandler} validation={numState.isValid}/>
          </InputDiv>
          <InputDiv>
            <InputTitle>Complemento:</InputTitle>
            <InputReverse style={{'width':'300px'}} value={compState.value} onChange={compChangeHandler} onBlur={validateCompHandler} validation={compState.isValid}/>
          </InputDiv>
        </InputContainer>
        <ButtonDiv>
          <ButtonSmall color='green'>Salvar</ButtonSmall>
          <span style={{'width':'20px'}}></span>
          <ButtonSmall onClick={showWindow}>Excluir</ButtonSmall>
        </ButtonDiv>
      </InnerContainerBg>  
      
    </ProfileBg>
    </>
  )
}