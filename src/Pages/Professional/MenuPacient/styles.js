import styled from 'styled-components';

export const SubTitle=styled.p`
  font-size:	24px;
  text-decoration-color:rgb(120, 157, 85,0);
  //text-decoration: ${props=>{return props.active===true?'underline':'none'}};
  transition: text-decoration-color 600ms;
  color:#282828;
  padding-bottom: 5px;
  cursor: pointer;
  @media(max-width:800px){
    font-size:14px;
    
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 18px;
  }
  &:hover{
    text-decoration:underline;
    text-decoration-color:rgb(120, 157, 85,1);
  }
  
  
`