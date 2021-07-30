import styled from 'styled-components';

export const ButtonDiv=styled.div`
  display:flex;
  
  align-items:center;
  

`

export const WindowTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #282828;
  margin-bottom: 5%;
  @media(max-width:600px){
    font-size:20px;
    
  }
`
export const WindowText = styled.p`
  font-size: 24px;
  color: #282828;
  margin-bottom: 5%;
  @media(max-width:600px){
    font-size:14px;
    
  }
`

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`


export const ScrollContainer=styled.div`
  border-radius:30px;
  background-color: white;
  border:2px solid;
  padding: 10px;
  width:450px;
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
    width: 420px;
    resize: none;
    padding-left: 10px;
    margin-bottom: 15px;
    height: 120px;
    border: 0px solid black;
    text-align: justify;
    font-size: 16px;
    font-weight:bold;
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

export const Justify=styled.textarea`
  width: 500px;
  height: 200px;
`