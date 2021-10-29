import styled from "styled-components";
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';


export const TypeTitle=styled.p`
    font-size: 24px;
    font-weight: bold; 
    color: #262626;
    margin-bottom: 10px;

`

export const TypeContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    border-bottom: 2px solid gray;
    padding-bottom: 40px;
`

export const QuestionContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-bottom:15px;
    border-bottom: 1px solid gray
    //box-shadow: 5px 5px 10px 5px gray;
`

export const ButtonTitle=styled.p`
    font-size: 14px;
    color: ${props=>
    {return props.add===true?'green':'red'}};
    
`

export const AddQuestion=styled(AiOutlinePlus)`
    width: 30px;
    height: 30px;
    color: green;
    
`

export const RemoveQuestion=styled(AiOutlineMinus)`
    width: 30px;
    height: 30px;
    color: red;
    
`

export const Button=styled.div`
    
    padding: 10px;
    color: ${props=>
    {return props.color==='green'?'#789D55':'red'}};
    background-color:white;
    font-weight: bold;
    font-size: 18px;
    border:1px solid ${props=>
    {return props.color==='green'?'#789D55':'red'}};;
    border-radius: 20px;  
    cursor:pointer;
    &&:disabled{
      background: #ccc;
      border-color: #ccc;
      color: #666666;
      cursor: not-allowed;
    }
    &&:hover{
        color: white;
        background-color:${props=>
    {return props.color==='green'?'#789D55':'red'}};
    }
`
