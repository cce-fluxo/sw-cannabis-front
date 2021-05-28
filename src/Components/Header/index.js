import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import { Logo,HeaderContainer, EnterTitle,HeaderBg, EnterContainer, EnterIcon, LogoutIcon, NavList, NavOption, LogoutContainer, MenuContainer} from './styles';
import AuthContext from '../../Storage/auth-context';
import {Title} from '../../Utils/styles';
import LogoCannabis from '../../Assets/logo.svg';
import Enter from '../../Assets/enter.svg';
import Exit from '../../Assets/exit.svg'
import { NavLink } from 'react-router-dom';


export default function Header(){
  const authCtx = useContext(AuthContext);
  const gest=false
  const adm=false
  const med=false
  const res=true
  //passar por context a info de qual tipo de user é

  const activeStyle={
    textDecoration:'underline',
    textDecorationColor:'#789D55'
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
          <NavOption>PACIENTES</NavOption>
          <NavOption>CONSULTAS</NavOption>
          <NavOption>PERFIL</NavOption>
          <LogoutContainer onClick={authCtx.onLogout}>
            <NavOption>SAIR</NavOption>
            <LogoutIcon src={Exit} alt="Logout" />
          </LogoutContainer>
        </NavList>
    )
  }

  const Adm = () => {
    return(
        <NavList>
          <NavOption>CADASTRO</NavOption>
          <NavOption>CONSULTAS</NavOption>
          <NavOption>PROFISSIONAIS</NavOption>
          <NavOption>PAGAMENTOS</NavOption>
          <LogoutContainer onClick={authCtx.onLogout}>
            <NavOption>SAIR</NavOption>
            <LogoutIcon src={Exit} alt="Logout" />
          </LogoutContainer>
        </NavList>
    )
  }

  const Res = () => {
    return(
        <NavList>
          <NavOption>PRODUTOS</NavOption>
          <NavOption>CONSULTAS</NavOption>
          <NavLink to='/perfil' activeStyle={activeStyle}><NavOption>PERFIL</NavOption></NavLink>
          <LogoutContainer onClick={authCtx.onLogout}>
            <NavOption>SAIR</NavOption>
            <LogoutIcon src={Exit} alt="Logout" />
          </LogoutContainer>
        </NavList>
    )
  }

  const Gest = () => {
    return(
        <NavList>
          <NavOption>PESQUISA</NavOption>
          <LogoutContainer onClick={authCtx.onLogout}>
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
        {authCtx.isLoggedIn && authCtx.user==='adm' && (<Adm/>)}
        {authCtx.isLoggedIn && authCtx.user==='gestor' && (<Gest/>)}
      </HeaderContainer>
    </HeaderBg>
  )

}