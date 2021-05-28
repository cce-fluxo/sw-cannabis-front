import styled from 'styled-components';

export const Title = styled.p`
  font-size:	48px;
  font-weight:bold;
  color:white;
  margin-top:5%;
  @media(max-width:800px){
    font-size: 24px;
    
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 36px;
    
  }
`

export const Button = styled.button `
    margin-top: 3%;
    width: 150px;
    height: 52px;
    color: white;
    background-color:#789D55;
    font-weight: bold;
    font-size: 20px;
    border:0px;
    border-radius: 20px;  
    cursor:pointer;
    &&:disabled{
      background: #ccc;
      border-color: #ccc;
      color: #666666;
      cursor: not-allowed;
    }
`