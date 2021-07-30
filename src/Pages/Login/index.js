import React,{useState, useEffect,useReducer,useContext} from 'react';
import AuthContext from '../../Storage/auth-context';
import Header from '../../Components/Header';
import { Input, InputPassword ,VisibilityButton} from '../../Components/Input/styles';
import { Button, Title } from '../../Utils/styles';
import {LoginBg, LoginContainer, ModalDiv, OptContainer, Option, StyledLink, WindowText, WindowTitle} from '../Login/styles';
import Email from '../../Assets/user.svg';
import Lock from '../../Assets/lock.svg';
import NotVisible from '../../Assets/notvisible.svg';
import Visible from '../../Assets/visible.svg';
import Modal from '../../Components/Modal';


const emailReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.includes('@')};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.includes('@')};
  }
  return {value:'', isValid:false };
};

const passwordReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid:action.val.trim().length > 5}
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid:state.value.trim().length > 5}
  }
  return {value:'', isValid:false};
}

const forgotEmailReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.includes('@')};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.includes('@')};
  }
  return {value:'', isValid:false };
};

export default function Login(){
  const [visibility, setVisibility] = useState(NotVisible);
  const [forgotWindow, setForgotWindow] = useState(false);
  const [forgotEmailSent, setForgotEmailSent] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const authCtx = useContext(AuthContext);

  const [emailState,dispatchEmail] = useReducer(emailReducer,{
    value:'',
    isValid: null,
  });


  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{
    value:'',
    isValid: null,
  });

  const [forgotEmailState,dispatchForgotEmail] = useReducer(forgotEmailReducer,{
    value:'',
    isValid: null,
  });
  
  const {isValid: emailIsValid } = emailState;
  const {isValid: passwordIsValid} = passwordState;
  const {isValid: forgotEmailIsValid } = forgotEmailState;

  useEffect(() => {
     const identifier = setTimeout(() => {
       console.log('Checking form validity!');
       setFormIsValid(
        emailIsValid && passwordIsValid
       );
     }, 500);

     return () => {
       console.log('CLEANUP');
       clearTimeout(identifier);
     };
   }, [emailIsValid, passwordIsValid]); 
   const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val:event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', val:event.target.value});
  };
  const forgotEmailChangeHandler = (event) => {
    dispatchForgotEmail({type:'USER_INPUT', val:event.target.value});
  };


  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const validateForgotEmailHandler = () => {
    dispatchForgotEmail({type:'INPUT_BLUR'});
  };
  


  const changeVisibility = (event) => {
    event.preventDefault()
    const password = document.querySelector("#login-password");
        password.type === 'password' ? password.type = 'text' : password.type = 'password';
        visibility === NotVisible? setVisibility(Visible): setVisibility(NotVisible)
    }
  
  const showForgotWindow = () => {
      setForgotEmailSent(false)
      setForgotWindow(true)
      forgotEmailState.value=''
  }
  const sendForgotEmail = () =>{
    setForgotEmailSent(true)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
    console.log(emailState.value, passwordState.value);
  };
  const window1 = () => {
    return (

        <Modal onClose={() => setForgotWindow(false)}>
            <LoginContainer>
                <ModalDiv>
                  <WindowTitle>Esqueci a Senha</WindowTitle>
                  <WindowText>Informe seu email para receber instruções para criação de uma nova senha.</WindowText>
                  <Input type="text" placeholder="E-mail" icon={Email} value={forgotEmailState.value} onChange={forgotEmailChangeHandler}   onBlur={validateForgotEmailHandler} validation={forgotEmailState.isValid}/>
                  <Button id='submit-forgot' onClick={sendForgotEmail} disabled={!forgotEmailState.isValid}>Recuperar senha</Button>
                </ModalDiv>
            </LoginContainer>        
        </Modal>   
   ) 
}
 

const window2 = () => {
  return (
      <Modal onClose={() => setForgotWindow(false)}>
          <LoginContainer>
          <ModalDiv>
              <WindowTitle>Esqueci a Senha</WindowTitle>
          <WindowText>Um email contendo o link para troca de senha foi enviado para {forgotEmailState.value}. Verifique sua caixa de spam. Caso não chegue em alguns minutos, faça o processo novamente.</WindowText>
          </ModalDiv>
          </LoginContainer>          
      </Modal>
      
  )
  
}


  
  return(
    <>
    <Header/>
    <LoginBg>
      {forgotWindow ? (forgotEmailSent? window2(): window1()) : null}
          <Title>LOGIN</Title>
      <LoginContainer>
        <Input id='login-email' maxLength='26' placeholder="Insira seu Email" autoComplete={'off'} icon={Email} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} validation={emailState.isValid}/>
        <div>
            <InputPassword id='login-password' maxLength='35' type='password' placeholder="Insira sua Senha" icon={Lock} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} validation={passwordState.isValid}/>
            <VisibilityButton src={visibility} onClick={changeVisibility}/>
        </div>
      </LoginContainer>
      <OptContainer>
        <Option onClick={showForgotWindow}>Esqueci a senha</Option>
        <StyledLink to='/cadastro'><Option>Cadastro</Option></StyledLink>
      </OptContainer>
      <Button type='submit' onClick={submitHandler} disabled={!formIsValid}>ENTRAR</Button>
        
        
  

    </LoginBg>
      
      
    </>
  )
}