import React, { useEffect, useState, useReducer, useContext } from 'react';
import { Button } from '../../Utils/styles';
import Modal from '../Modal';
import { ModalDiv, WindowText, WindowTitle } from '../../Pages/Login/styles';
import { RegisterContainer } from '../../Components/RegisterMed/styles';
import { Input, InputPassword, VisibilityButton } from '../../Components/Input/styles';
import User from '../../Assets/user.svg';
import Email from '../../Assets/email.svg';
import Lock from '../../Assets/lock.svg';
import House from '../../Assets/house.svg';
import NotVisible from '../../Assets/notvisible.svg';
import Visible from '../../Assets/visible.svg';
import Phone from '../../Assets/phone.svg';
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
const cpfReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length === 14 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length === 14 };
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

const enderecoReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false };
}
const bairroReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 0 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 0 }
  }
  return { value: '', isValid: false };
}
const numeroReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 0 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 0 }
  }
  return { value: '', isValid: false };
}

const complementoReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: true }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: true }
  }
  return { value: '', isValid: false };
}
const cidadeReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false };
}

const estadoReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length === 2 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length === 2 }
  }
  return { value: '', isValid: false };
}
const cepReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 3 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 3 }
  }
  return { value: '', isValid: false };
}





export default function RegisterAdm() {
  const { onUserRegister } = useContext(AuthContext);
  const [visibility, setVisibility] = useState(NotVisible);
  const [visibilityConf, setVisibilityConf] = useState(NotVisible);
  const [formIsValid, setFormIsValid] = useState(false);
  const [registerMade, setRegisterMade] = useState(undefined);

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
  const [cpfState, dispatchCpf] = useReducer(cpfReducer, {
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

  const [enderecoState, dispatchEndereco] = useReducer(enderecoReducer, {
    value: '',
    isValid: null,
  });
  const [bairroState, dispatchBairro] = useReducer(bairroReducer, {
    value: '',
    isValid: null,
  });

  const [numeroState, dispatchNumero] = useReducer(numeroReducer, {
    value: '',
    isValid: null,
  });
  const [complementoState, dispatchComplemento] = useReducer(complementoReducer, {
    value: '',
    isValid: null,
  });

  const [cidadeState, dispatchCidade] = useReducer(cidadeReducer, {
    value: '',
    isValid: null,
  });
  const [estadoState, dispatchEstado] = useReducer(estadoReducer, {
    value: '',
    isValid: null,
  });
  const [cepState, dispatchCep] = useReducer(cepReducer, {
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
  const { isValid: enderecoIsValid } = enderecoState;
  const { isValid: bairroIsValid } = bairroState;
  const { isValid: numeroIsValid } = numeroState;
  const { isValid: complementoIsValid } = complementoState;
  const { isValid: cidadeIsValid } = cidadeState;
  const { isValid: estadoIsValid } = estadoState;
  const { isValid: cepIsValid } = cepState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid &&
        passwordIsValid &&
        confPasswordIsValid &&
        nameIsValid &&
        lastNameIsValid &&
        cpfIsValid &&
        phoneIsValid &&
        enderecoIsValid &&
        bairroIsValid &&
        numeroIsValid &&
        complementoIsValid &&
        cidadeIsValid &&
        estadoIsValid &&
        cepIsValid
      );
    }, 500);

    return () => {
      //console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid,
    passwordIsValid,
    confPasswordIsValid,
    cpfIsValid,
    nameIsValid,
    lastNameIsValid,
    phoneIsValid,
    enderecoIsValid,
    bairroIsValid,
    numeroIsValid,
    complementoIsValid,
    cidadeIsValid,
    estadoIsValid,
    cepIsValid
  ]);

  const nameChangeHandler = (event) => {
    dispatchName({ type: 'USER_INPUT', val: event.target.value });
  };
  const lastNameChangeHandler = (event) => {
    dispatchLastName({ type: 'USER_INPUT', val: event.target.value });
  };
  const phoneChangeHandler = (event) => {
    dispatchPhone({ type: 'USER_INPUT', val: celMask(event.target.value) });
  };
  const cpfChangeHandler = (event) => {
    dispatchCpf({ type: 'USER_INPUT', val: cpfMask(event.target.value) });
  };
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };
  const confPasswordChangeHandler = (event) => {
    dispatchConfPassword({ type: 'USER_INPUT', val: event.target.value });
  };
  const enderecoChangeHandler = (event) => {
    dispatchEndereco({ type: 'USER_INPUT', val: event.target.value });
  };
  const bairroChangeHandler = (event) => {
    dispatchBairro({ type: 'USER_INPUT', val: event.target.value });
  };
  const numeroChangeHandler = (event) => {
    dispatchNumero({ type: 'USER_INPUT', val: event.target.value });
  };
  const complementoChangeHandler = (event) => {
    dispatchComplemento({ type: 'USER_INPUT', val: event.target.value });
  };
  const cidadeChangeHandler = (event) => {
    dispatchCidade({ type: 'USER_INPUT', val: event.target.value });
  };
  const estadoChangeHandler = (event) => {
    dispatchEstado({ type: 'USER_INPUT', val: event.target.value });
  };
  const cepChangeHandler = (event) => {
    dispatchCep({ type: 'USER_INPUT', val: cepMask(event.target.value )});
  };

  const validateNameHandler = () => {
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
  };
  const validateEnderecoHandler = () => {
    dispatchEndereco({ type: 'INPUT_BLUR' });
  };
  const validateBairroHandler = () => {
    dispatchBairro({ type: 'INPUT_BLUR' });
  };
  const validateNumeroHandler = () => {
    dispatchNumero({ type: 'INPUT_BLUR' });
  };
  const validateComplementoHandler = () => {
    dispatchComplemento({ type: 'INPUT_BLUR' });
  };
  const validateCidadeHandler = () => {
    dispatchCidade({ type: 'INPUT_BLUR' });
  };
  const validateEstadoHandler = () => {
    dispatchEstado({ type: 'INPUT_BLUR' });
  };
  const validateCepHandler = () => {
    dispatchCep({ type: 'INPUT_BLUR' });
  };

  const changeVisibility = (event) => {
    event.preventDefault()
    const password = document.querySelector("#register-password");
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
      cpf: cpfState.value,
      celular: phoneState.value,
      password: passwordState.value,
      endereco: enderecoState.value,
      bairro: bairroState.value,
      numero: numeroState.value,
      complemento: complementoState.value,
      cidade: cidadeState.value,
      estado: estadoState.value,
      cep: cepState.value
    }
    onUserRegister('admin', data, setRegisterMade)
  };

  const RegisterFinished = () => {
    return (
      <>
        <Modal register='true' onClose={() => setRegisterMade(false)}>
          <RegisterContainer>
            <ModalDiv>
              <WindowTitle>
                CADASTRO
              </WindowTitle>
              <WindowText>Cadastro realizado com sucesso.
                Um email de confirmação foi enviado para {emailState.value}
              </WindowText>
            </ModalDiv>
          </RegisterContainer>
        </Modal>

      </>
    )
  }

  const telMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1)$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
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

  const celMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1)$2')
      .replace(/(\d{5})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  const cepMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }

  return (
    <>
      {registerMade ? <RegisterFinished /> : undefined}
      <RegisterContainer>

        <Input id='register-name' maxLength='45' placeholder="Insira seu Nome" autoComplete={'off'} icon={User} value={nameState.value} onChange={nameChangeHandler} onBlur={validateNameHandler} validation={nameState.isValid} />
        <Input id='register-lastname' maxLength='45' placeholder="Insira seu Sobrenome" autoComplete={'off'} icon={User} value={lastNameState.value} onChange={lastNameChangeHandler} onBlur={validateLastNameHandler} validation={lastNameState.isValid} />
        <Input id='register-cpf' placeholder="Insira seu CPF" autoComplete={'off'} icon={User} value={cpfState.value} onChange={cpfChangeHandler} onBlur={validateCpfHandler} validation={cpfState.isValid} />
        <Input id='register-email' maxLength='45' placeholder="Insira seu Email" autoComplete={'off'} icon={Email} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} validation={emailState.isValid} />
        <Input id='register-phone' placeholder="Insira seu Telefone" autoComplete={'off'} icon={Phone} value={phoneState.value} onChange={phoneChangeHandler} onBlur={validatePhoneHandler} validation={phoneState.isValid} />
        <Input id='register-estado' maxLength='2' placeholder="Insira seu Estado" autoComplete={'off'} icon={House} value={estadoState.value} onChange={estadoChangeHandler} onBlur={validateEstadoHandler} validation={estadoState.isValid} />
        <Input id='register-cidade' placeholder="Insira sua Cidade" autoComplete={'off'} icon={House} value={cidadeState.value} onChange={cidadeChangeHandler} onBlur={validateCidadeHandler} validation={cidadeState.isValid} />
        <Input id='register-bairro' placeholder="Insira seu Bairro" autoComplete={'off'} icon={House} value={bairroState.value} onChange={bairroChangeHandler} onBlur={validateBairroHandler} validation={bairroState.isValid} />
        <Input id='register-cep' placeholder="Insira seu CEP" autoComplete={'off'} icon={House} value={cepState.value} onChange={cepChangeHandler} onBlur={validateCepHandler} validation={cepState.isValid} />
        <Input id='register-endereco' placeholder="Insira seu Endereço" autoComplete={'off'} icon={House} value={enderecoState.value} onChange={enderecoChangeHandler} onBlur={validateEnderecoHandler} validation={enderecoState.isValid} />
        <Input id='register-numero' placeholder="Insira seu Número" autoComplete={'off'} icon={House} value={numeroState.value} onChange={numeroChangeHandler} onBlur={validateNumeroHandler} validation={numeroState.isValid} />
        <Input id='register-complemento' placeholder="Insira o Complemento" autoComplete={'off'} icon={House} value={complementoState.value} onChange={complementoChangeHandler} onBlur={validateComplementoHandler} validation={complementoState.isValid} />






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
    </>

  )
}