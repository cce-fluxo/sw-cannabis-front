import React,{useEffect,useState,useReducer} from 'react';
import Avatar from "react-avatar-edit";
import {DropOptions, RegisterContainer, ScrollContainer, TextArea} from './styles';
import { Input, InputPassword ,VisibilityButton} from '../../Components/Input/styles';
import User from '../../Assets/user.svg';
import Email from '../../Assets/email.svg';
import Phone from '../../Assets/phone.svg';
import Lock from '../../Assets/lock.svg';
import NotVisible from '../../Assets/notvisible.svg';
import Visible from '../../Assets/visible.svg';
import Cell from '../../Assets/cell.svg';
import Este from '../../Assets/esteto.svg';
import Facebook from '../../Assets/facebook.svg';
import Instagram from '../../Assets/instagram.svg';
import Twitter from '../../Assets/twitter.svg';
import Id from '../../Assets/id.svg';
import House from '../../Assets/house.svg';
import Bio from '../../Assets/bio.svg';
import { Button } from '../../Utils/styles';
import Modal from '../Modal';
import { ModalDiv,WindowText, WindowTitle } from '../../Pages/Login/styles';



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
    return {value:action.val, isValid: action.val.trim().length===13};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===13};
  }
  return {value:'', isValid:false };
};

const cellphoneReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length===14};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length===14};
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

const specReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
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

const facebookReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: (action.val.includes('facebook.com/') || action.val==='')};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: (state.value.includes('facebook.com/') || state.value==='')};
  }
  return {value:'', isValid:false };
};

const instagramReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: (action.val.includes('instagram.com/') || action.val==='')};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: (state.value.includes('instagram.com/') || state.value==='')};
  }
  return {value:'', isValid:false };
};

const twitterReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: (action.val.includes('twitter.com/') || action.val==='') };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: (state.value.includes('twitter.com/') || state.value==='')};
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
const bairroReducer = (state,action) => {
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
const bioReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>30 };
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>30};
  }
  return {value:'', isValid:false };
};



export default function RegisterMed(){
  const [visibility, setVisibility] = useState(NotVisible);
  const [visibilityConf, setVisibilityConf] = useState(NotVisible);
  const [formIsValid, setFormIsValid] = useState(false);
  const [registerMade, setRegisterMade] = useState(undefined);
  const [selectColor,setSelectColor]=useState();
  const [preview, setPreview] = useState(null);
  function onClose() {
    setPreview(null);
  }
  function onCrop(pv) {
    setPreview(pv);
  }
  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

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
  const [cellphoneState,dispatchCellphone] = useReducer(cellphoneReducer,{
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

  const [specState,dispatchSpec] = useReducer(specReducer,{
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

  const [facebookState,dispatchFacebook] = useReducer(facebookReducer,{
    value:'',
    isValid: null,
  });
  const [instagramState,dispatchInstagram] = useReducer(instagramReducer,{
    value:'',
    isValid: null,
  });
  const [twitterState,dispatchTwitter] = useReducer(twitterReducer,{
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
  const [bairroState,dispatchBairro] = useReducer(bairroReducer,{
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
  const [bioState,dispatchBio] = useReducer(bioReducer,{
    value:'',
    isValid: null,
  });


  
  const {isValid: emailIsValid } = emailState;
  const {isValid: passwordIsValid} = passwordState;
  const {isValid: confPasswordIsValid } = confPasswordState;
  const {isValid: nameIsValid } = nameState;
  const {isValid: lastNameIsValid } = lastNameState;
  const {isValid: phoneIsValid } = phoneState;
  const {isValid: cellphoneIsValid } = cellphoneState;
  const {isValid: specIsValid } = specState;
  const {isValid: cpfIsValid } = cpfState;
  const {isValid: rgIsValid } = rgState;
  const {isValid: facebookIsValid } = facebookState;
  const {isValid: instagramIsValid } = instagramState;
  const {isValid: twitterIsValid } = twitterState;
  const {isValid: cityIsValid } = cityState;
  const {isValid: estadoIsValid } = estadoState;
  const {isValid: cepIsValid } = cepState;
  const {isValid: bairroIsValid } = bairroState;
  const {isValid: adressIsValid } = adressState;
  const {isValid: compIsValid } = compState;
  const {isValid: bioIsValid } = bioState;


  useEffect(() => {
     const identifier = setTimeout(() => {
       //console.log('Checking form validity!');
       setFormIsValid(
        emailIsValid && passwordIsValid && confPasswordIsValid && nameIsValid && lastNameIsValid && phoneIsValid && cellphoneIsValid && selectColor && specIsValid && cpfIsValid && rgIsValid && facebookIsValid && instagramIsValid && twitterIsValid && cityIsValid && estadoIsValid && cepIsValid && bairroIsValid && adressIsValid && compIsValid && bioIsValid
       );
     }, 500);

     return () => {
       //console.log('CLEANUP');
       clearTimeout(identifier);
     };
   }, [emailIsValid, passwordIsValid, confPasswordIsValid, nameIsValid, lastNameIsValid,phoneIsValid, cellphoneIsValid, selectColor,specIsValid, facebookIsValid, instagramIsValid, twitterIsValid, cpfIsValid, rgIsValid,cityIsValid,estadoIsValid , cepIsValid , bairroIsValid , adressIsValid , compIsValid, bioIsValid]); 

   const nameChangeHandler = (event) => {
    dispatchName({type:'USER_INPUT', val:event.target.value});
  };
  const lastNameChangeHandler = (event) => {
    dispatchLastName({type:'USER_INPUT', val:event.target.value});
  };
  const phoneChangeHandler = (event) => {
    dispatchPhone({type:'USER_INPUT', val:telMask(event.target.value)});
  };
  const cellphoneChangeHandler = (event) => {
    dispatchCellphone({type:'USER_INPUT', val:celMask(event.target.value)});
  };

   const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val:event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', val:event.target.value});
  };
  const confPasswordChangeHandler = (event) => {
    dispatchConfPassword({type:'USER_INPUT', val:event.target.value});
  };
  const specChangeHandler = (event) => {
    dispatchSpec({type:'USER_INPUT', val:event.target.value});
  };
  const cpfChangeHandler = (event) => {
    dispatchCpf({type:'USER_INPUT', val:cpfMask(event.target.value)});
  };
  const rgChangeHandler = (event) => {
    dispatchRg({type:'USER_INPUT', val:rgMask(event.target.value)});
  };
  const facebookChangeHandler = (event) => {
    dispatchFacebook({type:'USER_INPUT', val:event.target.value});
  };
  const instagramChangeHandler = (event) => {
    dispatchInstagram({type:'USER_INPUT', val:event.target.value});
  };
  const twitterChangeHandler = (event) => {
    dispatchTwitter({type:'USER_INPUT', val:event.target.value});
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
  const bairroChangeHandler = (event) => {
    dispatchBairro({type:'USER_INPUT', val:event.target.value});
  };
  const adressChangeHandler = (event) => {
    dispatchAdress({type:'USER_INPUT', val:event.target.value});
  };
  const compChangeHandler = (event) => {
    dispatchComp({type:'USER_INPUT', val:event.target.value});
  };
  const bioChangeHandler = (event) => {
    dispatchBio({type:'USER_INPUT', val:event.target.value});
  };


  const validateNameHandler = () => {
    dispatchName({type:'INPUT_BLUR'});
  };

  const validateLastNameHandler = () => {
    dispatchLastName({type:'INPUT_BLUR'});
  };

  const validatePhoneHandler = () => {
    dispatchPhone({type:'INPUT_BLUR'});
  };
  const validateCellphoneHandler = () => {
    dispatchCellphone({type:'INPUT_BLUR'});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };
  const validateSpecHandler = () => {
    dispatchSpec({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const validateConfPasswordHandler = () => {
    dispatchConfPassword({type:'INPUT_BLUR'});
  };
  const validateCpfHandler = () => {
    dispatchCpf({type:'INPUT_BLUR'});
  };
  const validateRgHandler = () => {
    dispatchRg({type:'INPUT_BLUR'});
  };
  const validateFacebookHandler = () => {
    dispatchFacebook({type:'INPUT_BLUR'});
  };
  const validateInstagramHandler = () => {
    dispatchInstagram({type:'INPUT_BLUR'});
  };
  const validateTwitterHandler = () => {
    dispatchTwitter({type:'INPUT_BLUR'});
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
  const validateBairroHandler = () => {
    dispatchBairro({type:'INPUT_BLUR'});
  };
  const validateAdressHandler = () => {
    dispatchAdress({type:'INPUT_BLUR'});
  };
  const validateCompHandler = () => {
    dispatchComp({type:'INPUT_BLUR'});
  };
  const validateBioHandler = () => {
    dispatchBio({type:'INPUT_BLUR'});
  };


  const changeVisibility = (event) => {
    event.preventDefault()
    const password = document.querySelector("#register-password");
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
      
      console.log(nameState.value,lastNameState.value,emailState.value, phoneState.value,cellphoneState.value,passwordState.value, bioState.value);
      setRegisterMade(true);
    };

    

    const changeSelect = ()=>{
      setSelectColor(true)
      if (document.getElementById("male").selected){
        console.log('masculino')
      }
      else{
        console.log('feminino')
      }
    }
    const blurSelect=()=>{
      if (document.getElementById('none').selected){
        setSelectColor(false)
      }
      
      
    }
    const RegisterFinished = () =>{
      return(
        <>
        <Modal register='true' onClose={()=> setRegisterMade(false)}>
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



  return(
    <>
    {registerMade?<RegisterFinished/>:undefined}
    <RegisterContainer>

<Input id='register-name' maxLength='45' placeholder="Insira seu Nome" autoComplete={'off'} icon={User} value={nameState.value} onChange={nameChangeHandler} onBlur={validateNameHandler} validation={nameState.isValid} />
<Input id='register-lastname' maxLength='45' placeholder="Insira seu Sobrenome" autoComplete={'off'} icon={User} value={lastNameState.value} onChange={lastNameChangeHandler} onBlur={validateLastNameHandler} validation={lastNameState.isValid}/>
<Input id='register-email' maxLength='45' placeholder="Insira seu Email" autoComplete={'off'} icon={Email} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} validation={emailState.isValid}/>
<Input id='register-phone'  placeholder="Insira seu Telefone" autoComplete={'off'} icon={Phone} value={phoneState.value} onChange={phoneChangeHandler} onBlur={validatePhoneHandler} validation={phoneState.isValid}/>
<Input id='register-cellphone'  placeholder="Insira seu Celular" autoComplete={'off'} style={{'backgroundSize':'4%','backgroundPositionX':'6%'}} icon={Cell} value={cellphoneState.value} onChange={cellphoneChangeHandler} onBlur={validateCellphoneHandler} validation={cellphoneState.isValid}/>

<DropOptions icon={User} onChange={changeSelect} selected={selectColor} validation={selectColor} onBlur={blurSelect}>
    <option id='none' disabled hidden selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sexo</option>
    <option id='male' style={{'color':'black','backgroundColor':'white'}}>Masculino</option>
    <option id='female' style={{'color':'black','backgroundColor':'white'}}>Feminino</option>
</DropOptions>
<Input id='register-spec' placeholder="Insira sua Especialidade" autoComplete={'off'} icon={Este} value={specState.value} onChange={specChangeHandler} onBlur={validateSpecHandler} validation={specState.isValid}/>
<ScrollContainer validation={bioState.isValid}>
  <TextArea icon={Bio} id='register-bio' placeholder='Biografia' autoComplete={'off'} value={bioState.value} onChange={bioChangeHandler} onBlur={validateBioHandler} validation={bioState.isValid}></TextArea>
</ScrollContainer>
<Input id='register-cpf' placeholder="Insira seu CPF" autoComplete={'off'} icon={Id} value={cpfState.value} onChange={cpfChangeHandler} onBlur={validateCpfHandler} validation={cpfState.isValid}/>
<Input id='register-rg' placeholder="Insira seu RG" autoComplete={'off'} icon={Id} value={rgState.value} onChange={rgChangeHandler} onBlur={validateRgHandler} validation={rgState.isValid}/>
<Input id='register-face' placeholder="Insira seu Facebook" autoComplete={'off'} icon={Facebook} value={facebookState.value} onChange={facebookChangeHandler} onBlur={validateFacebookHandler} validation={facebookState.isValid}/>
<Input id='register-insta' placeholder="Insira seu Instagram" autoComplete={'off'} icon={Instagram} value={instagramState.value} onChange={instagramChangeHandler} onBlur={validateInstagramHandler} validation={instagramState.isValid}/>
<Input id='register-twitter' placeholder="Insira seu Twitter" autoComplete={'off'} icon={Twitter} value={twitterState.value} onChange={twitterChangeHandler} onBlur={validateTwitterHandler} validation={twitterState.isValid}/>
<Input id='register-city' placeholder="Insira sua Cidade" autoComplete={'off'} icon={House} value={cityState.value} onChange={cityChangeHandler} onBlur={validateCityHandler} validation={cityState.isValid}/>
<Input id='register-estado' maxLength='2' placeholder="Insira seu Estado" autoComplete={'off'} icon={House} value={estadoState.value} onChange={estadoChangeHandler} onBlur={validateEstadoHandler} validation={estadoState.isValid}/>
<Input id='register-cep' placeholder="Insira seu CEP" autoComplete={'off'} icon={House} value={cepState.value} onChange={cepChangeHandler} onBlur={validateCepHandler} validation={cepState.isValid}/>
<Input id='register-bairro' placeholder="Insira seu Bairro" autoComplete={'off'} icon={House} value={bairroState.value} onChange={bairroChangeHandler} onBlur={validateBairroHandler} validation={bairroState.isValid}/>
<Input id='register-adress' placeholder="Insira seu Endereço" autoComplete={'off'} icon={House} value={adressState.value} onChange={adressChangeHandler} onBlur={validateAdressHandler} validation={adressState.isValid}/>
<Input id='register-comp' placeholder="Insira o Complemento" autoComplete={'off'} icon={House} value={compState.value} onChange={compChangeHandler} onBlur={validateCompHandler} validation={compState.isValid}/>

<div>
  <InputPassword id='register-password' maxLength='35' type='password' placeholder="Insira sua Senha" icon={Lock} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} validation={passwordState.isValid}/>
  <VisibilityButton src={visibility} onClick={changeVisibility}/>
</div>
<div>
  <InputPassword id='register-password-conf' maxLength='35' type='password' placeholder="Confirme sua Senha" icon={Lock} value={confPasswordState.value} onChange={confPasswordChangeHandler} onBlur={validateConfPasswordHandler} validation={confPasswordState.isValid}/>
  <VisibilityButton src={visibilityConf} onClick={changeVisibilityConf}/>
</div>
<div style={{'display':'flex','alignItems':'center','flexDirection':'column'}}>
      <Avatar
        width={250}
        height={150}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={null}
        label='Imagem de perfil'
        labelStyle={{'padding':'10px','backgroundColor':'white'}}
        
      />
      <br/>
      {preview && (
        <>
          <img src={preview} alt="Preview"/>
          
        </>
      )}
    </div>
<Button type='submit' onClick={submitHandler} disabled={!formIsValid}>CADASTRAR</Button>
</RegisterContainer>

    </>
  )
}