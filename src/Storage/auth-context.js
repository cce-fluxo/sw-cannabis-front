import React, {useState,useEffect} from 'react';
import {  useHistory } from 'react-router-dom';
import api from '../Services/api';



const AuthContext = React.createContext({
  isLoggedIn: false,
  //onLogout: () => {},
  //onLogin: (email,password) => {},
  //user: 'responsavel'
});
export const AuthContextProvider =(props)=> {
  const history=useHistory();
  const [user,setUser]=useState();
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('Token');
  
    if (token) {
      console.log('com token')
      api.get('/user/', {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        //console.log(res.data)
        const email=res.data.email
        const name=res.data.name
        const member=res.data.member

        setUser({email,name,member})
        console.log(user)
      })
      .catch((error) => {
        console.error(error)
      })
    }
    else{
      console.log('sem token')
    }
  }, []);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    //history.push("/login");
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('Token');
    localStorage.removeItem('RefreshToken');
    setIsLoggedIn(false);
    
  };
  
  const loginHandler = (email,password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    //console.log(email, password);
  };

  async function handleSubmit(email,password){
        //
        const data = {
            "email": email,
            "password": password
        }
        try {
            const response = await api.post("/login", data)
            const name=response.data.User.name
            const id=response.data.User.id
            const member=response.data.User.member
            const token=response.data.token
            const refreshToken=response.data.refresh_token
            loginHandler(email,password);
            localStorage.setItem('Token',token)
            localStorage.setItem('RefreshToken',refreshToken)
            console.log(response.data)
            setUser({
              name,
              email,
              id,
              member
            })
            console.log(user)
            
        } catch (error) {
            console.log(error)
        }
  }

  return <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: handleSubmit,
      userInfo:user,
      user:'responsavel'
    }}
  >{props.children}</AuthContext.Provider>
};

export default AuthContext;