import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderBg = styled.div`
  background-color: #282828;
  width: 100%;
`

export const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo =styled.img`
  width: 25%;
  padding-top:10px;
  padding-bottom: 10px;
  display:block;
`

export const EnterContainer = styled(Link)`
  display: flex;
  align-items:center;
  cursor: pointer;
`

export const EnterIcon = styled.img`
  margin-left: 5px;
  width:30%;
`
export const EnterTitle =styled.p`

  font-size:24px;
  font-weight:bold;
  color:white;
  @media(max-width:800px){
    font-size: 12px;
    
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 16px;
    
  }
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
`

export const NavOption =styled.li`
    display:flex;
    justify-content: space-between;
    align-items:center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding: 5px;
    cursor:pointer;
    &:hover{
      text-decoration:underline;
      text-decoration-color: #789D55;
    }
    @media(max-width:800px){
    font-size: 12px;
    //color:red;
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 16px;
    //color: blue;
  } 
`
export const LogoutContainer = styled.div`
  display:flex;
  align-items: center;
`
export const LogoutIcon = styled.img`
  width:30px;
  @media(max-width:800px){
    width: 15px;
  }
`