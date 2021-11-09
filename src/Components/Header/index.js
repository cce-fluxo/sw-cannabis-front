import React,{useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Logo,HeaderContainer, EnterTitle,HeaderBg, EnterContainer, EnterIcon, LogoutIcon, NavList, NavOption, LogoutContainer, MenuContainer} from './styles';
import AuthContext from '../../Storage/auth-context';
import {Title} from '../../Utils/styles';
import LogoCannabis from '../../Assets/logo.svg';
import Enter from '../../Assets/enter.svg';
import Exit from '../../Assets/exit.svg'
import { NavLink } from 'react-router-dom';


export default function Header(){
  const authCtx = useContext(AuthContext);
  const history=useHistory()
  const gest=false
  const adm=false
  const med=false
  const res=true
  //passar por context a info de qual tipo de user é

  const activeStyle={
    textDecoration:'underline',
    textDecorationColor:'#789D55'
  }
const logout=()=>{
  authCtx.onLogout()
  history.push("/login");

}

  const UserCheck = () =>{
    if (!authCtx.isLoggedIn) {
      return(
            <EnterContainer to="/login">
              <EnterTitle>ENTRAR</EnterTitle>
              <EnterIcon  src={ Enter }/>
            </EnterContainer>     
      )
    }
    else if (authCtx.isLoggedIn){
      return (
       
        <NavList>
          <NavOption>PRODUTOS</NavOption>
          <NavOption>CONSULTAS</NavOption>
          <NavOption>PERFIL</NavOption>
          <LogoutContainer onClick={authCtx.onLogout}>
            <NavOption>SAIR</NavOption>
            <LogoutIcon src={Exit} alt="Logout" />
          </LogoutContainer>
        </NavList>
        
       
      ) 
    }
    else if (med){
      return (
       
        <NavList>
          <NavOption>PACIENTES</NavOption>
          <NavOption>CONSULTAS</NavOption>
          <NavOption>PERFIL</NavOption>
          <LogoutContainer>
            <NavOption>SAIR</NavOption>
            <LogoutIcon src={Exit} alt="Logout" onClick={authCtx.onLogout}/>
          </LogoutContainer>
        </NavList>
      ) 
    }
    else if (adm){
      return (
       
        <NavList>
          <NavOption>CADASTRO</NavOption>
          <NavOption>CONSULTAS</NavOption>
          <NavOption>PROFISSIONAIS</NavOption>
          <NavOption>PAGAMENTOS</NavOption>
          <LogoutContainer>
            <NavOption>SAIR</NavOption>
            <LogoutIcon src={Exit} alt="Logout" onClick={authCtx.onLogout}/>
          </LogoutContainer>
        </NavList>
       
      ) 
    }
  }

  const Logged = ()=>{
    return(
            <EnterContainer to="/login">
              <EnterTitle>ENTRAR</EnterTitle>
              <EnterIcon  src={ Enter }/>
            </EnterContainer> 
    )
  }

  const Medic = () => {
    return(
        <NavList>
          <NavLink to='/pacientes' activeStyle={activeStyle}><NavOption>PACIENTES</NavOption></NavLink>
          <NavLink to='/consultas' activeStyle={activeStyle}><NavOption>CONSULTAS</NavOption></NavLink>
          <NavLink to='/perfil' activeStyle={activeStyle}><NavOption>PERFIL</NavOption></NavLink>
          <LogoutContainer onClick={logout}>
            <NavOption>SAIR</NavOption>
            <LogoutIcon src={Exit} alt="Logout" />
          </LogoutContainer>
        </NavList>
    )
  }

  const Adm = () => {
    return(
        <NavList>
          <NavLink to='/cadastros' activeStyle={activeStyle}><NavOption>CADASTRO</NavOption></NavLink>
          <NavOption>CONSULTAS</NavOption>
          <NavOption>PROFISSIONAIS</NavOption>
          <NavOption>PAGAMENTOS</NavOption>
          <LogoutContainer onClick={logout}>
            <NavOption>SAIR</NavOption>
            <Link to='/'><LogoutIcon src={Exit} alt="Logout" /></Link>
          </LogoutContainer>
        </NavList>
    )
  }

  const Res = () => {
    return(
        <NavList>
          <NavLink to="/produtos"><NavOption>PRODUTOS</NavOption></NavLink>
          <NavLink to='/consultas' activeStyle={activeStyle}><NavOption>CONSULTAS</NavOption></NavLink>
          <NavLink to='/perfil' activeStyle={activeStyle}><NavOption>PERFIL</NavOption></NavLink>
          <LogoutContainer onClick={logout}>
            <NavOption>SAIR</NavOption>
            <Link to='/'><LogoutIcon src={Exit} alt="Logout" /></Link>
          </LogoutContainer>
        </NavList>
    )
  }

  const Gest = () => {
    return(
        <NavList>
          <NavOption>PESQUISA</NavOption>
          <LogoutContainer onClick={logout}>
            <NavOption>SAIR</NavOption>
            <LogoutIcon src={Exit} alt="Logout" />
          </LogoutContainer>
        </NavList>
    )
  }
  

  return(
    <HeaderBg>
      <HeaderContainer>
        <Logo src={LogoCannabis}/>
        {!authCtx.isLoggedIn && (<Logged/>)}
        {authCtx.isLoggedIn && authCtx.user==='medico' && (<Medic/>)}
        {authCtx.isLoggedIn && authCtx.user==='responsavel' && (<Res/>)}
        {authCtx.isLoggedIn && authCtx.user==='administrador' && (<Adm/>)}
        {authCtx.isLoggedIn && authCtx.user==='gestor' && (<Gest/>)}
      </HeaderContainer>
    </HeaderBg>
  )

}