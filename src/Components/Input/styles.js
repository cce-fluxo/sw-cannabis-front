import styled from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai';

export const Input = styled.input`
    width: 420px;
    margin-bottom: 15px;
    height: 55px;
    border: 2px solid;
    border-radius: 60px;
    text-align: center;
    font-size: 16px;
    font-weight:bold;
    background-image: url(${props => props.icon});
    background-size: 6%;
    background-repeat: no-repeat;
    background-position-x: 5% ;
    background-position-y:50%;
    border-color:${props=>
    {return props.validation===false?'red':'none'}};
    background-color:${props=>
    {return props.validation===false?'#fbdada':'none'}};
    &&:focus{
      border-color:${props=>
    {return props.validation===false?'red':'#789D55'}};
      
    }    
`
export const InputPassword = styled.input`
    width: 420px;
    margin-left: 25px;
    margin-bottom: 15px;
    height: 55px;
    background-image: url(${props => props.icon});
    background-size: 6%;
    background-repeat: no-repeat;
    background-position-x: 5% ;
    background-position-y:50%;
    border: 2px solid ;
    border-radius: 60px;
    text-align:center;
    font-size: 16px;
    font-weight:bold;
    border-color:${props=>
    {return props.validation===false?'red':'none'}};
    background-color:${props=>
    {return props.validation===false?'#fbdada':'none'}};
    &&:focus{
      border-color:${props=>
    {return props.validation===false?'red':'#789D55'}};
      
    }   
    
    
    
`

export const VisibilityButton = styled.img`
    width: 25px;
    cursor:pointer;
    position: relative;
    right: 45px;
    top: 8px;
`

export const InputReverse = styled.input`
    width: 420px;
    margin-bottom: 15px;
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
    width:160px;
    font-size: 12px;
  }
  @media(max-width:1000px) and (min-width: 800px){
    width:300px;
    font-size:12px;
  }
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  
`

export const InputTitle=styled.p`
  font-size: 20px;
 // font-weight: bold;
  padding-left: 20px;
  @media(max-width:800px){
    
    font-size: 14px;
  }
  @media(max-width:1000px) and (min-width: 800px){
    
    font-size:16px;
  }

`