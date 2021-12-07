import styled from 'styled-components';


export const RegisterBg = styled.div`
  max-width: 1280px;
  height: 700px;
  margin: 50px auto;
  border-radius: 20px;
  background-color:#282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin-bottom: 120px;
  @media(max-width:1400px) {
    width:90%;
  }
`
export const TitleContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`
export const ArrowDiv = styled.div`
  justify-self: self-start;
  width: 1200px;
  height: 10px;
  @media(max-width:1400px){
    width:950px;
  }
  @media(max-width:1100px) {
    width:750px;
  }
  @media(max-width:900px) {
    width:550px;
  }

`
export const Return = styled.img`
   
    width: 80px;
    cursor:pointer;
   
    
`

export const InnerContainerBg = styled.div`
  width: 620px;
  height: 400px;
  border-radius: 40px;
  margin-top: 20px;
  background-color: white;
  
`

export const InnerContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items:center;
  `

export const InnerTitle = styled.p`
  margin-top:10px;
  font-size:24px;
  color: #282828;
  font-weight: bold;
  
`
export const Line = styled.div`
  width: 70%;
  height: 1px;
  background-color: #789D55;
  margin-bottom: 40px;
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const SelectDiv=styled.div`
display:flex;
align-items:center;
margin:5px;
`
export const SelectOption=styled.input`
margin-right:10px;
cursor: pointer;
`