import styled from "styled-components";

import { BsFillArrowUpCircleFill, BsArrowDownCircleFill, BsXCircleFill } from 'react-icons/bs';

export const ContainerBg = styled.div`
  max-width: 1280px;
  //min-height: 500px;
  margin: 50px auto;
  padding-bottom: 60px;
  border-radius: 20px;
  background-color:#282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width:1400px) {
    width:90%;
  }
`

export const InnerContainerBg = styled.div`
  width: 80%;
  //min-height: 200px;
  border-radius: 40px;
  margin-top: 20px;
  padding-bottom: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  
  padding-top: 30px;
`

export const TypeTitle = styled.p`
    font-size: 24px;
    font-weight: bold; 
    color: #262626;
    margin-bottom: 10px;
    text-align: center;
`

export const TypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    border-bottom: 2px solid gray;
    padding-bottom: 40px;
    margin-bottom:40px;
`

export const QuestionsContainer = styled.div`
    margin-bottom: 30px;

`

export const QuestionContainer = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    padding: 10px;
    //border-bottom: 1px solid gray;
    margin: 15px 10px 0 0;
    //margin-bottom:15px;
    //border-bottom: 1px solid gray
    //box-shadow: 5px 5px 10px 5px gray;
`

export const QuestionBg = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction:column;
    
    padding-bottom: 20px;
    //margin-bottom:15px;
    //border-bottom: 1px solid gray
    //box-shadow: 5px 5px 10px 5px gray;
    border-bottom: 1px solid gray;
`

export const SmallInput = styled.input`
    width: 220px;
    height: 55px;
    border: 2px solid;
    border-radius: 60px;
    background-color:#282828;
    color:white;
    padding-left: 20px;
    font-size: 16px;
    border-color:${props => { return props.validation === false ? 'red' : 'none' }};
    background-color:${props => { return props.validation === false ? '#781118' : 'none' }};
    &&:focus{
      border-color:${props => { return props.validation === false ? 'red' : '#789D55' }};
    }
    &&::placeholder{
      color: white;
    }
    @media(max-width:800px){
    width:120px;
    font-size: 12px;
  }
  @media(max-width:1000px) and (min-width: 800px){
    width:180px;
    font-size:12px;
  }
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`


export const ButtonTitle = styled.p`
    font-size: 14px;
    color: ${props =>  props.add === true ? 'green' : 'red' };
    
`

export const UpButton = styled(BsFillArrowUpCircleFill)`
    width: 30px;
    height: 30px;
    color: black;
    cursor: ${props => props.disabled === true ? 'not-allowed' : 'pointer'};
`

export const DownButton = styled(BsArrowDownCircleFill)`
    width: 30px;
    height: 30px;
    color: black;
    cursor: pointer;
    margin-left: 5px;
    cursor: ${props => props.disabled === true ? 'not-allowed' : 'pointer'};
    
`

export const Button = styled.button`
    width: 190px;
    padding: ${props => { return props.color === 'green' ? '10px' : '5px' }};
    color: ${props => { return props.color === 'green' ? '#789D55' : 'red' }};
    background-color:white;
    font-weight: bold;
    font-size:${props => { return props.color === 'green' ? '18px' : '12px' }};
    border:1px solid ${props => { return props.color === 'green' ? '#789D55' : 'red' }};
    border-radius: 20px; 
    
    cursor:pointer;
    
    &&:hover{
        color: white;
        background-color:${props => { return props.color === 'green' ? '#789D55' : 'red' }};
    }
    &&:disabled{
      background: #ccc;
      border-color: #ccc;
      color: #666666;
      cursor: not-allowed;
    }
`






export const RemoveIcon = styled(BsXCircleFill)`
    width: 30px;
    height: 30px;
    color: red;
    cursor: pointer;
    margin-left: 5px;
`

export const RadioOption = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

export const RadioContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
    

`

export const RadioContainerBg = styled.div`
    background-color: #262626;
    padding:20px;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`

export const RadioName = styled.label`
    font-size: 14px;
    margin: .4rem;
    color:white;
    cursor:pointer;

`

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const DivOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    div+div{
        margin-top: 10px;
    }
`

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    button+ button{
        margin-left: 10px;
    }
`

export const OptionContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:15px;
    //padding-right:40px;
`

export const InnerModal = styled.div`
    width: 80%;
  //min-height: 200px;
  border-radius: 40px;
  margin-top: 20px;
  padding-bottom: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  
  padding-top: 30px;
  overflow-y: auto;
    &::-webkit-scrollbar-track {
      background-color: #F4F4F4;
      width: 10px;
    }
    &::-webkit-scrollbar {
        background: #F4F4F4;
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        width: 5px;
        background: #dad7d7;
    }
`