import styled from "styled-components";

import {BsFillArrowUpCircleFill,BsArrowDownCircleFill,BsXCircleFill} from 'react-icons/bs';


export const TypeTitle=styled.p`
    font-size: 24px;
    font-weight: bold; 
    color: #262626;
    margin-bottom: 10px;
    text-align: center;
`

export const TypeContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    border-bottom: 2px solid gray;
    padding-bottom: 40px;
    margin-bottom:40px;
`

export const QuestionContainer=styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    padding: 10px;
    margin-right: 10px;
    //border-bottom: 1px solid gray;
    margin-top:15px;
    //margin-bottom:15px;
    //border-bottom: 1px solid gray
    //box-shadow: 5px 5px 10px 5px gray;
`

export const QuestionBg=styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction:column;
    
    border-bottom: 1px solid gray;
    padding-bottom: 40px;
    //margin-bottom:15px;
    //border-bottom: 1px solid gray
    //box-shadow: 5px 5px 10px 5px gray;
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
    border-color:${props=>
    {return props.validation===false?'red':'none'}};
    background-color:${props=>
    {return props.validation===false?'#781118':'none'}};
    &&:focus{
      border-color:${props=>
    {return props.validation===false?'red':'#789D55'}};
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

export const ButtonsContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`


export const ButtonTitle=styled.p`
    font-size: 14px;
    color: ${props=>
    {return props.add===true?'green':'red'}};
    
`

export const UpButton=styled(BsFillArrowUpCircleFill)`
    width: 30px;
    height: 30px;
    color: black;
    cursor: pointer;
    
`

export const DownButton=styled(BsArrowDownCircleFill)`
    width: 30px;
    height: 30px;
    color: black;
    cursor: pointer;
    margin-left: 5px;
    
`

export const Button=styled.button`
    
    padding: ${props=>
    {return props.color==='green'?'10px':'5px'}};
    color: ${props=>
    {return props.color==='green'?'#789D55':'red'}};
    background-color:white;
    font-weight: bold;
    font-size:${props=>
    {return props.color==='green'?'18px':'12px'}};
    border:1px solid ${props=>
    {return props.color==='green'?'#789D55':'red'}};
    border-radius: 20px; 
    
    cursor:pointer;
    
    &&:hover{
        color: white;
        background-color:${props=>
    {return props.color==='green'?'#789D55':'red'}};
    }
    &&:disabled{
      background: #ccc;
      border-color: #ccc;
      color: #666666;
      cursor: not-allowed;
    }
`






export const RemoveIcon=styled(BsXCircleFill)`
    width: 30px;
    height: 30px;
    color: red;
    cursor: pointer;
    margin-left: 5px;
`

export const RadioOption=styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

export const RadioContainer=styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
    

`

export const RadioContainerBg=styled.div`
    background-color: #262626;
    padding:20px;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`

export const RadioName=styled.label`
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

export const DivOption=styled.div`
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-bottom: 10px;
 
    width:900px;
`

export const OptionContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:15px;
    //padding-right:40px;
`