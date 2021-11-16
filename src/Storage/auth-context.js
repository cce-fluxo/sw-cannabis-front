import React, { useState, useEffect } from 'react';
import api from '../Services/api';
import axios from 'axios';
import { Buffer } from 'buffer';




const AuthContext = React.createContext({
  isLoggedIn: false,
  //onLogout: () => {},
  //onLogin: (email,password) => {},
  //user: 'responsavel'
});
export const AuthContextProvider = (props) => {

  const [user, setUser] = useState({});
  const [pacients, setPacients] = useState({});

  // eslint-disable-next-line
  const [userType, setUserType] = useState();
  const [userId, setUserId] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function sendToStorage(photo) {
    try {

      const uriArray = photo.uri.split('.');

      const tipoImagem = uriArray[uriArray.length - 1];

      const firstResponse = await api.get(
        `/files/put_url?file_format=${tipoImagem}`
      );

      const fileName = firstResponse.data.file_name;
      const mediaUrl = firstResponse.data.media_url;

      const binaryFile = Buffer.from(photo.base64, 'base64');
      // eslint-disable-next-line
      const secondResponse = await axios.put(mediaUrl, binaryFile, {
        headers: { 'Content-Type': tipoImagem },
      });

      return fileName;
    } catch (err) {
      console.log(err.response.data);
    }
  }


  useEffect(() => {
    const token = localStorage.getItem('Token');
    const user = localStorage.getItem('UserType');
    const id = localStorage.getItem('ID');
    if (token && user === 'responsavel') {

      api.get(`/patient/lista`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res.data)
          setPacients(res.data)


        })
        .catch((error) => {
          console.error(error)
        })
      api.get(`/responsavel/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res.data)
          setUser(res.data)


        })
        .catch((error) => {
          console.error(error)
        })


    }
    else if (token && user === 'medico') {
      api.get(`/medico/${id}`, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          console.log(res.data)
          setUser(res.data)



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

  async function dataChange(cel, cidade, estado, numero, endereco, comp, cep,) {
    const id = user.id

    const data = {
      //'cpf':'123.444.852.79',
      //'celular':'(21)99971-8899',
      'telefone_secundario': cel,
      'cidade': cidade,
      'estado': estado,
      'cep': cep,
      'endereco': endereco,
      'numero': numero,
      'complemento': comp,
    }
    console.log(data)
    try {
      const rota = '/responsavel/' + id
      const response = await api.patch(rota, data)
      console.log(response.data)
      window.location.reload()
    }
    catch (error) {
      console.log(error)
    }
  }
  const logoutHandler = () => {
    //    history.push("/login");
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

  async function registerPacient(nome, sobrenome, nascimento, cpf, rg, identidade, diagnostico, laudo, receita, cidade, estado, cep, endereco, complemento, numero) {
    const data = {
      'nome': nome,
      'sobrenome': sobrenome,
      'data_nascimento': nascimento,
      'cpf': cpf,
      'rg': rg,
      'documentos_pessoais': identidade,
      'diagnostico': diagnostico,
      'laudo_medico': laudo,
      'receita_medica': receita,
      'cidade': cidade,
      'estado': estado,
      'cep': cep,
      'endereco': endereco,
      'complemento': complemento,
      'numero': numero,
      'bairro': 'tijuca'
    }
    try {

      const response = await api.post('/patient', data)

      console.log(response)
      console.log(response.data)

    } catch (error) {
      console.log(error)

    }

  }

  async function removeHandler(id, pacientList) {
    //const newList=pacientList.filter(x=>x.id!==id)
    //console.log(newList)
    const token = localStorage.getItem('Token');
    const rota = '/paciente/' + id
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    api.delete(rota, { headers })
    try {
      const response = await api.delete(rota, { headers })

      console.log(response)
    }
    catch (error) {
      console.log(error)
    }

    // api.delete(rota, {
    //   headers: {
    //     'authorization': `Bearer ${token}`
    //   }
    // }).then((res) => {
    //   console.log(res)

    // })
    // .catch((error) => {
    //   console.error(error)
    // })
  }


  async function updatePacient(info, id) {

    const data = {
      'diagnostico': info.diag, 'laudo_medico': info.laudo, 'receita_medica': info.receita, 'cidade': info.city, 'estado': info.state, 'cep': info.cep, 'endereco': info.adress, 'complemento': info.comp, 'numero': info.num, 'bairro': 'tijuca'
    }
    try {
      const rota = '/paciente/' + id
      const response = await api.patch(rota, data)
      console.log(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }




  async function handleSubmit(email, password, history) {
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
      localStorage.setItem('ID', response.data.id)
      localStorage.setItem('Token', token)
      localStorage.setItem('RefreshToken', refreshToken)
      localStorage.setItem('UserType', response.data.user)
      history.push("/");
      //cac@poli.ufrj.br igor123456 respo
      //cami@poli.ufrj.br igor123 medico

    } catch (error) {
      console.log(error)
      //window.location.reload()
    }
  }

  async function userRegister(
    userType,
    data,
    setRegisterMade
  ) {
    if (userType === 'responsavel') {
      try {
        console.log(data)
        const response = await api.post("/responsavel", data)
        console.log(response.data)
        setRegisterMade(true)
      } catch (error) {
        console.log(error)
      }
    }

    else if (userType === 'medico') {
      try {
        const response = await api.post("/medico", data)
        console.log(response.data)
        setRegisterMade(true)

      } catch (error) {
        console.log(error)
      }
    }



  }

  async function resetPasswordEmail(email) {
    const data = { 'email': email }
    try {
      const response = await api.get("/responsavel-confirm", data)
      console.log(response.data)

    } catch (error) {
      console.log(error)

    }
  }



  return <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: handleSubmit,
      userInfo: user,
      pacients: pacients,
      user: userType,
      onDataChange: dataChange,
      onPacientRegister: registerPacient,
      onPacientRemove: removeHandler,
      onPacientUpdate: updatePacient,
      onUserRegister: userRegister,
      onSendForgotEmail: resetPasswordEmail,
      sendToStorage: sendToStorage,
    }}
  >{props.children}</AuthContext.Provider>
};

export default AuthContext;
