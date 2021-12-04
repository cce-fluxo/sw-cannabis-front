import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderBg = styled.div`
  background-color: #282828;
<<<<<<< HEAD
=======
  width: 100%;
>>>>>>> carrinho
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

<<<<<<< HEAD
=======
export const CartContainer = styled.div`
  margin-left: 10px;
  display: flex;
  cursor: pointer;
  img{
    width: 25px;
  }
  span{
    color: #fff;
    background-color: red;
    min-width: 18px;
    height: 18px;
    padding: 1px;
    border-radius: 50%;
    position: relative;
    top: -12px;
    left: -10px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

>>>>>>> carrinho
export const NavOption =styled.li`
    display:flex;
    justify-content: space-between;
    align-items:center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding: 5px;
    cursor:pointer;
<<<<<<< HEAD
    &:hover{
      text-decoration:underline;
      text-decoration-color: #789D55;
    }
    @media(max-width:800px){
    font-size: 12px;
    color:red;
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 16px;
    color: blue;
=======
    text-decoration-color:rgb(120, 157, 85,0);
    transition: text-decoration-color 600ms;
    &:hover{
      text-decoration:underline;
      text-decoration-color:rgb(120, 157, 85,1)
    }
    @media(max-width:800px){
    font-size: 12px;
    //color:red;
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 16px;
    //color: blue;
>>>>>>> carrinho
  } 
`
export const LogoutContainer = styled.div`
  display:flex;
  align-items: center;
`
export const LogoutIcon = styled.img`
  width:30px;
<<<<<<< HEAD
=======
  @media(max-width:800px){
    width: 15px;
  }
>>>>>>> carrinho
`