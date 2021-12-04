<<<<<<< HEAD
import React,{useEffect,useState,useReducer} from 'react';
import {RegisterContainer} from './styles';
import { Input, InputPassword ,VisibilityButton} from '../../Components/Input/styles';
=======
import React, { useEffect, useState, useReducer, useContext } from 'react';
import { RegisterContainer } from './styles';
import { Input, InputPassword, VisibilityButton } from '../../Components/Input/styles';
>>>>>>> carrinho
import User from '../../Assets/user.svg';
import Email from '../../Assets/email.svg';
import Phone from '../../Assets/phone.svg';
import Lock from '../../Assets/lock.svg';
import NotVisible from '../../Assets/notvisible.svg';
<<<<<<< HEAD
=======
import Id from '../../Assets/id.svg';
>>>>>>> carrinho
import Visible from '../../Assets/visible.svg';
import { Button } from '../../Utils/styles';
import RegisterSucess from '../RegisterSucess';
import Modal from '../Modal';
<<<<<<< HEAD
import { ModalDiv,WindowText, WindowTitle } from '../../Pages/Login/styles';
import { Link } from 'react-router-dom';


const emailReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.includes('@')};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.includes('@')};
  }
  return {value:'', isValid:false };
};

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

const phoneReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===11};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===11};
  }
  return {value:'', isValid:false };
};

const passwordReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid:action.val.trim().length > 6}
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid:state.value.trim().length > 6}
  }
  return {value:'', isValid:false};
}

const confPasswordReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val===document.querySelector('#register-password').value};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value===document.querySelector('#register-password').value};
  }
  return {value:'', isValid:false };
};



export default function RegisterResp(){
=======
import { ModalDiv, WindowText, WindowTitle } from '../../Pages/Login/styles';
import { Link } from 'react-router-dom';
import AuthContext from '../../Storage/auth-context';



const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const nameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 2 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 2 };
  }
  return { value: '', isValid: false };
};

const lastNameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 2 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 2 };
  }
  return { value: '', isValid: false };
};

const phoneReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length === 14 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length === 14 };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false };
}

const confPasswordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val === document.querySelector('#register-password').value };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value === document.querySelector('#register-password').value };
  }
  return { value: '', isValid: false };
};

const celMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2')
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const cpfMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export default function RegisterResp() {
  const ctx = useContext(AuthContext);
>>>>>>> carrinho
  const [visibility, setVisibility] = useState(NotVisible);
  const [visibilityConf, setVisibilityConf] = useState(NotVisible);
  const [formIsValid, setFormIsValid] = useState(false);
  const [registerMade, setRegisterMade] = useState(undefined);

<<<<<<< HEAD
  const [emailState,dispatchEmail] = useReducer(emailReducer,{
    value:'',
    isValid: null,
  });

  const [nameState,dispatchName] = useReducer(nameReducer,{
    value:'',
    isValid: null,
  });
  const [lastNameState,dispatchLastName] = useReducer(lastNameReducer,{
    value:'',
    isValid: null,
  });
  const [phoneState,dispatchPhone] = useReducer(phoneReducer,{
    value:'',
    isValid: null,
  });

  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{
    value:'',
    isValid: null,
  });

  const [confPasswordState,dispatchConfPassword] = useReducer(confPasswordReducer,{
    value:'',
    isValid: null,
  });
  
  const {isValid: emailIsValid } = emailState;
  const {isValid: passwordIsValid} = passwordState;
  const {isValid: confPasswordIsValid } = confPasswordState;
  const {isValid: nameIsValid } = nameState;
  const {isValid: lastNameIsValid } = lastNameState;
  const {isValid: phoneIsValid } = phoneState;

  useEffect(() => {
     const identifier = setTimeout(() => {
       console.log('Checking form validity!');
       setFormIsValid(
        emailIsValid && passwordIsValid && confPasswordIsValid && nameIsValid && lastNameIsValid && phoneIsValid
       );
     }, 500);

     return () => {
       console.log('CLEANUP');
       clearTimeout(identifier);
     };
   }, [emailIsValid, passwordIsValid, confPasswordIsValid, nameIsValid, lastNameIsValid,phoneIsValid]); 

   const nameChangeHandler = (event) => {
    dispatchName({type:'USER_INPUT', val:event.target.value});
  };
  const lastNameChangeHandler = (event) => {
    dispatchLastName({type:'USER_INPUT', val:event.target.value});
  };
  const phoneChangeHandler = (event) => {
    dispatchPhone({type:'USER_INPUT', val:event.target.value});
  };

   const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val:event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', val:event.target.value});
  };
  const confPasswordChangeHandler = (event) => {
    dispatchConfPassword({type:'USER_INPUT', val:event.target.value});
=======
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: null,
  });
  const [lastNameState, dispatchLastName] = useReducer(lastNameReducer, {
    value: '',
    isValid: null,
  });
  const [phoneState, dispatchPhone] = useReducer(phoneReducer, {
    value: '',
    isValid: null,
  });
  const [cpfState, dispatchCpf] = useReducer(phoneReducer, {
    value: '',
    isValid: null,
  });


  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const [confPasswordState, dispatchConfPassword] = useReducer(confPasswordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const { isValid: confPasswordIsValid } = confPasswordState;
  const { isValid: nameIsValid } = nameState;
  const { isValid: lastNameIsValid } = lastNameState;
  const { isValid: cpfIsValid } = cpfState;
  const { isValid: phoneIsValid } = phoneState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && cpfIsValid && passwordIsValid && confPasswordIsValid && nameIsValid && lastNameIsValid && phoneIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid,cpfIsValid, passwordIsValid, confPasswordIsValid, nameIsValid, lastNameIsValid, phoneIsValid]);

  const nameChangeHandler = (event) => {
    dispatchName({ type: 'USER_INPUT', val: event.target.value });
  };
  const lastNameChangeHandler = (event) => {
    dispatchLastName({ type: 'USER_INPUT', val: event.target.value });
  };
  const phoneChangeHandler = (event) => {
    dispatchPhone({ type: 'USER_INPUT', val: celMask(event.target.value) });
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };
  const cpfChangeHandler = (event) => {
    dispatchCpf({ type: 'USER_INPUT', val: cpfMask(event.target.value) });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };
  const confPasswordChangeHandler = (event) => {
    dispatchConfPassword({ type: 'USER_INPUT', val: event.target.value });
>>>>>>> carrinho
  };


  const validateNameHandler = () => {
<<<<<<< HEAD
    dispatchName({type:'INPUT_BLUR'});
  };

  const validateLastNameHandler = () => {
    dispatchLastName({type:'INPUT_BLUR'});
  };

  const validatePhoneHandler = () => {
    dispatchPhone({type:'INPUT_BLUR'});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const validateConfPasswordHandler = () => {
    dispatchConfPassword({type:'INPUT_BLUR'});
=======
    dispatchName({ type: 'INPUT_BLUR' });
  };

  const validateLastNameHandler = () => {
    dispatchLastName({ type: 'INPUT_BLUR' });
  };
  const validateCpfHandler = () => {
    dispatchCpf({ type: 'INPUT_BLUR' });
  };

  const validatePhoneHandler = () => {
    dispatchPhone({ type: 'INPUT_BLUR' });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const validateConfPasswordHandler = () => {
    dispatchConfPassword({ type: 'INPUT_BLUR' });
>>>>>>> carrinho
  };
  const changeVisibility = (event) => {
    event.preventDefault()
    const password = document.querySelector("#register-password");
<<<<<<< HEAD
        password.type === 'password' ? password.type = 'text' : password.type = 'password';
        visibility === NotVisible? setVisibility(Visible): setVisibility(NotVisible)
    }
  const changeVisibilityConf = (event) => {
    event.preventDefault()
    const password = document.querySelector("#register-password-conf");
        password.type === 'password' ? password.type = 'text' : password.type = 'password';
        visibilityConf === NotVisible? setVisibilityConf(Visible): setVisibilityConf(NotVisible)
    }  

    const submitHandler = (event) => {
      event.preventDefault();
      
      console.log(nameState.value,lastNameState.value,emailState.value, phoneState.value,passwordState.value);
      setRegisterMade(true);
    };

    const RegisterFinished = () =>{
      return(
        <>
        <Modal register='true' onClose={()=> setRegisterMade(false)}>
=======
    password.type === 'password' ? password.type = 'text' : password.type = 'password';
    visibility === NotVisible ? setVisibility(Visible) : setVisibility(NotVisible)
  }
  const changeVisibilityConf = (event) => {
    event.preventDefault()
    const password = document.querySelector("#register-password-conf");
    password.type === 'password' ? password.type = 'text' : password.type = 'password';
    visibilityConf === NotVisible ? setVisibilityConf(Visible) : setVisibilityConf(NotVisible)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      nome: nameState.value,
      sobrenome: lastNameState.value,
      email: emailState.value,
      password: passwordState.value,
      cpf: cpfState.value,
      celular: phoneState.value,
      rg: "wqsdwqwdwq"
    }
    ctx.onUserRegister('responsavel', data, setRegisterMade)

  };

  const RegisterFinished = () => {
    return (
      <>
        <Modal register='true' onClose={() => setRegisterMade(false)}>
>>>>>>> carrinho
          <RegisterContainer>
            <ModalDiv>
              <WindowTitle>
                CADASTRO
              </WindowTitle>
<<<<<<< HEAD
              <WindowText>Cadastro realizado com sucesso. 
=======
              <WindowText>Cadastro realizado com sucesso.
>>>>>>> carrinho
                Um email de confirmação foi enviado para {emailState.value}
              </WindowText>
            </ModalDiv>
          </RegisterContainer>
        </Modal>

<<<<<<< HEAD
        </>
      )
    }

  return(
    <>
    {registerMade?<RegisterFinished/>:undefined}
    <RegisterContainer>

<Input id='register-name' maxLength='45' placeholder="Insira seu Nome" autoComplete={'off'} icon={User} value={nameState.value} onChange={nameChangeHandler} onBlur={validateNameHandler} validation={nameState.isValid} />
<Input id='register-lastname' maxLength='45' placeholder="Insira seu Sobrenome" autoComplete={'off'} icon={User} value={lastNameState.value} onChange={lastNameChangeHandler} onBlur={validateLastNameHandler} validation={lastNameState.isValid}/>
<Input id='register-email' maxLength='45' placeholder="Insira seu Email" autoComplete={'off'} icon={Email} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} validation={emailState.isValid}/>
<Input id='register-phone' type='number' maxLength='11' placeholder="Insira seu Telefone" autoComplete={'off'} icon={Phone} value={phoneState.value} onChange={phoneChangeHandler} onBlur={validatePhoneHandler} validation={phoneState.isValid}/>
<div>
  <InputPassword id='register-password' maxLength='35' type='password' placeholder="Insira sua Senha" icon={Lock} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} validation={passwordState.isValid}/>
  <VisibilityButton src={visibility} onClick={changeVisibility}/>
</div>
<div>
  <InputPassword id='register-password-conf' maxLength='35' type='password' placeholder="Confirme sua Senha" icon={Lock} value={confPasswordState.value} onChange={confPasswordChangeHandler} onBlur={validateConfPasswordHandler} validation={confPasswordState.isValid}/>
  <VisibilityButton src={visibilityConf} onClick={changeVisibilityConf}/>
</div>
<Button type='submit' onClick={submitHandler} disabled={!formIsValid}>CADASTRAR</Button>
</RegisterContainer>

    
=======
      </>
    )
  }

  return (
    <>
      {registerMade ? <RegisterFinished /> : undefined}
      <RegisterContainer>

        <Input id='register-name' maxLength='45' placeholder="Insira seu Nome" autoComplete={'off'} icon={User} value={nameState.value} onChange={nameChangeHandler} onBlur={validateNameHandler} validation={nameState.isValid} />
        <Input id='register-lastname' maxLength='45' placeholder="Insira seu Sobrenome" autoComplete={'off'} icon={User} value={lastNameState.value} onChange={lastNameChangeHandler} onBlur={validateLastNameHandler} validation={lastNameState.isValid} />
        <Input id='register-cpf' placeholder="Insira seu CPF" autoComplete={'off'} icon={Id} value={cpfState.value} onChange={cpfChangeHandler} onBlur={validateCpfHandler} validation={cpfState.isValid} />
        <Input id='register-email' maxLength='45' placeholder="Insira seu Email" autoComplete={'off'} icon={Email} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} validation={emailState.isValid} />
        <Input id='register-phone' placeholder="Insira seu Celular" autoComplete={'off'} icon={Phone} value={phoneState.value} onChange={phoneChangeHandler} onBlur={validatePhoneHandler} validation={phoneState.isValid} />
        <div>
          <InputPassword id='register-password' maxLength='35' type='password' placeholder="Insira sua Senha" icon={Lock} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} validation={passwordState.isValid} />
          <VisibilityButton src={visibility} onClick={changeVisibility} />
        </div>
        <div>
          <InputPassword id='register-password-conf' maxLength='35' type='password' placeholder="Confirme sua Senha" icon={Lock} value={confPasswordState.value} onChange={confPasswordChangeHandler} onBlur={validateConfPasswordHandler} validation={confPasswordState.isValid} />
          <VisibilityButton src={visibilityConf} onClick={changeVisibilityConf} />
        </div>
        <Button type='submit' onClick={submitHandler} disabled={!formIsValid}>CADASTRAR</Button>
      </RegisterContainer>


>>>>>>> carrinho
    </>
  )
}