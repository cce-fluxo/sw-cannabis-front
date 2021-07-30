import styled from 'styled-components';

export const Title = styled.p`
  font-size:	48px;
  font-weight:bold;
  color:white;
  text-decoration: ${props=>
  {return props.underline===true?'underline':'none'}};
  text-decoration-color:#789D55;
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
    //width: 150px;
    //height: 52px;
    padding:10px;
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

export const ButtonSmall = styled.button `
    margin-top: 3%;
    width: 100px;
    height: 30px;
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
`