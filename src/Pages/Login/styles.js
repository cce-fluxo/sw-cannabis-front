import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LoginBg = styled.div`
  max-width: 1280px;
  height: 700px;
  margin: 50px auto;
  border-radius: 20px;
  background-color:#282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin-bottom: 120px;
  @media(max-width:1400px) {
    width:90%;
  }
`

export const LoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top:5%;
    `

export const OptContainer = styled.div `
    width: 380px;
    display: flex;
    justify-content:space-between;
    color: white;
`

export const Option = styled.p`
  cursor:pointer;
  text-decoration:none;
  color:white;
  &&:hover{
  text-decoration: underline;
}
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    &&:focus, &&:hover, &&:visited, &&:link, &&:active {
        color:white;
    }
`
export const WindowTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #282828;
  margin-bottom: 5%;
`
export const WindowText = styled.p`
  font-size: 24px;
  color: #282828;
  margin-bottom: 5%;
`

export const ModalDiv = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`