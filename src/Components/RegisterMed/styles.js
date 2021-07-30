import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 40px;
    `

export const DropOptions = styled.select`
    width: 420px;
    
    cursor: pointer;
    margin-bottom: 15px;
    height: 55px;
    border: 2px solid black;
    border-radius: 60px;
    padding-left:160px;
    color:${props=>
    {return props.selected===true?'black':'gray'}};
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

export const ScrollContainer=styled.div`
  border-radius:30px;
  background-color: white;
  border:2px solid;
  padding: 10px;
  width:420px;
  padding-bottom: 0px;
  margin-bottom:15px;
  border-color:${props=>
    {return props.validation===false?'red':'none'}};
    background-color:${props=>
    {return props.validation===false?'#fbdada':'none'}};
    &&:hover{
      border-color:${props=>
    {return props.validation===false?'red':'#789D55'}};
      
    }  
`

export const TextArea= styled.textarea`
    width: 380px;
    resize: none;
    padding-left: 50px;
    margin-bottom: 15px;
    height: 120px;
    border: 0px solid black;
    text-align: justify;
    font-size: 16px;
    font-weight:bold;
    background-image: url(${props => props.icon});
    background-size: 6%;
    background-repeat: no-repeat;
    background-position-x: 3% ;
    background-position-y:0;
    background-color:${props=>
    {return props.validation===false?'#fbdada':'none'}};
    &&::-webkit-scrollbar{
     width: 15px;
    
     
    }
    &&::-webkit-scrollbar-thumb {
    background: #789D55;
    min-height:40px;
    border-radius: 10px;
    border-left: 4px solid white;
    border-right: 4px solid white;
    padding:10px;
}
`