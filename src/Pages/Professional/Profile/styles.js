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

export const Title = styled.p`
  font-size:	48px;
  font-weight:bold;
  color:white;
  margin-top:5%;
  cursor: pointer;
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
  text-decoration: ${props=>
  {return props.active===true?'underline':'none'}};
  text-decoration-color:#789D55;
`

export const InnerContainerBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 400px;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: white;
  
`

export const SubTitle = styled.p`
  font-size:	24px;
  
  padding: 10px;
  padding-top: 30px;
  text-align: center;
  //cursor: pointer;
  @media(max-width:800px){
    font-size: 16px;
    
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 12px;
  }
  
`