import styled from 'styled-components';
import {BiUserCircle} from 'react-icons/bi';
import {AiFillCheckSquare} from 'react-icons/ai';


export const CardContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  width: 70%;
  margin-bottom: 30px;
`

export const Card=styled.div`
background-color:#262626;
display: flex;
align-items: center;
justify-content: center;
//justify-content:space-between;
padding:10px;
width:100%;
border-radius: 30px;
`

export const User=styled(BiUserCircle)`
  width: 80px;
  height: 80px;
  color: #789D55;
`

export const CardName=styled.p`
  font-size: 20px;
  color: white;
  font-weight: bold;
`

export const LeftContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 width: 30%;
`

export const RightContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-left: 80px;
`

export const RightText=styled.p`
  font-size:16px;
  color:white;
  //text-align: center;
  border-left: 2px solid #789D55;
  padding-left: 5px;
  margin-bottom: 10px;
  cursor:pointer;
`

export const Check=styled(AiFillCheckSquare)`
  width: 20px;
  height: 20px;
  color: lightgray;
  cursor: pointer;
  &:hover{
    color: #789D55;
  }
`

export const CheckText=styled.p`
  font-size:16px;
  color:white;
  margin-left: 5px;
`
export const CheckContainer=styled.div`
  display: flex;
  align-items: center;
  margin-left: -2px;
`