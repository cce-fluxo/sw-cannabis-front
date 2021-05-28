import styled from 'styled-components';

export const ProfileBg = styled.div`
  max-width: 1280px;
  min-height: 700px;
  margin: 50px auto;
  border-radius: 20px;
  background-color:#282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

export const Title = styled.p`
  font-size:	48px;
  font-weight:bold;
  color:white;
  margin-top:5%;
  cursor: pointer;
  
  text-decoration: ${props=>
  {return props.active===true?'underline':'none'}};
  text-decoration-color:#789D55;
  @media(max-width:800px){
    font-size: 24px;
    
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 36px;
  }
  &&:hover{
    text-decoration:underline;
    text-decoration-color:#789D55;
  }
`

export const InnerContainerBg = styled.div`
  width: 80%;
  height: 1300px;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top: 10px;
`

export const Return = styled.img`
    width: 90%;
    cursor:pointer;  
`

export const ArrowDiv=styled.div`
  width: 90%;
  display:flex;
  align-items:flex-start;
`

export const InputContainer=styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
`