import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../Services/api';



const AuthContext = React.createContext({
  isLoggedIn: false,
  //onLogout: () => {},
  //onLogin: (email,password) => {},
  //user: 'responsavel'
});
export const AuthContextProvider = (props) => {
  let history = useHistory()
  const [user, setUser] = useState({});
  const [pacients, setPacients] = useState({});
  const [userType,setUserType]=useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('Token');
    const user=localStorage.getItem('UserType');
    if (token && user==='responsavel') {
      api.get('/paciente/lista', {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res.data)
          setPacients(res.data)
          
          
        })
        .catch((error) => {
          console.error(error)
        })
      api.get('/responsavel/lista', {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res.data[0])
          setUser(res.data[0])
          
          
        })
        .catch((error) => {
          console.error(error)
        })
        
        
    }
    else {
      console.log('sem token')
    }
  }, []);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  async function dataChange(cel,cidade,estado,numero,endereco,comp,cep,){
    const id=user.id
    
    const data={
      'telefone_secundario':cel,
      'cidade':cidade,
      'estado':estado,
      'cep':cep,
      'endereco':endereco,
      'numero':numero,
      'complemento':comp,
    }
    console.log(data)
    try{
      const rota='/responsavel/'+id
      const response = await api.patch(rota, data)
      console.log(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }
  const logoutHandler = () => {
    //history.push("/login");
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('Token');
    localStorage.removeItem('RefreshToken');
    localStorage.removeItem('UserType');
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    //console.log(email, password);
  };

  async function registerPacient(nome,sobrenome,nascimento,cpf,rg,identidade,diagnostico,laudo,receita,cidade,estado,cep,endereco,complemento,numero){
    const id=user.id
    //console.log(user.paciente)
    const paciente={
      nome:nome,sobrenome:sobrenome, nascimento:nascimento,cpf:cpf,rg:rg,identidade:identidade,diagnostico:diagnostico,laudo:laudo,receita:receita,cidade:cidade,estado:estado,cep:cep,endereco:endereco,complemento:complemento,numero:numero,
    }
    const data={
      'nome':nome,'sobrenome':sobrenome, 'data_nascimento':'2000-02-02','cpf':cpf,'rg':rg,'documentos_pessoais':identidade,'diagnostico':diagnostico,'laudo_medico':laudo,'receita_medica':receita,'cidade':cidade,'estado':estado,'cep':cep,'endereco':endereco,'complemento':complemento,'numero':numero,'bairro':'tijuca'
    }
    
   
    try {
      //const rota='/responsavel/'+id
      const response = await api.post('/paciente', data)
      console.log(response)
      console.log(response.data)

    } catch (error) {
      console.log(error)
      
    }
    localStorage.setItem(cpf,JSON.stringify(paciente));
    
    if (localStorage.getItem('Pacientes')===null){
      const startList=[].concat(paciente)
      localStorage.setItem('Pacientes',JSON.stringify(startList))
    }
    else{
      const oldList=JSON.parse(localStorage.getItem('Pacientes'))
      const newList=oldList.concat(paciente);
      localStorage.setItem('Pacientes',JSON.stringify(newList))
    }
  }

  const removeHandler=(cpf)=>{
    localStorage.removeItem(cpf);
    const list=JSON.parse(localStorage.getItem('Pacientes'))
    const index = list.findIndex(x => x.cpf ===cpf);
    //console.log(list,index)
    //const newList=list.splice(index);
    const filteredList = list.filter(function(i){ 
     const check=list.indexOf(i);
      return check != index;
  });
    console.log(filteredList)
  localStorage.setItem('Pacientes',JSON.stringify(filteredList))

  }

  const getInfo=(cpf)=>{

    return JSON.parse(localStorage.getItem(cpf));
    //console.log(code)
  }

  

  async function handleSubmit(email, password) {
    const data = {
      "email": email,
      "password": password
    }
    try {
      const response = await api.post("/login", data)
      console.log(response.data)
      setUserType(response.data.user)
      const refreshToken = response.data.refresh_token
      const token = response.data.token
      loginHandler(email, password);
      localStorage.setItem('Token', token)
      localStorage.setItem('RefreshToken', refreshToken)
      localStorage.setItem('UserType', response.data.user)
      window.location.reload()
      //cac@poli.ufrj.br igor123456

    } catch (error) {
      console.log(error)
      window.location.reload()
    }
  }

  return <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: handleSubmit,
      userInfo: user,
      pacients: pacients,
      user: localStorage.getItem('UserType'),
      onDataChange:dataChange,
      onPacientRegister: registerPacient,
      onPacientRemove: removeHandler,
      getPacientInfo: getInfo,

    }}
  >{props.children}</AuthContext.Provider>
};

export default AuthContext;