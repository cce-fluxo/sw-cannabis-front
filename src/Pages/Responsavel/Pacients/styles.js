import styled from 'styled-components';

export const ProfileBg = styled.div`
  max-width: 1280px;
  min-height: 700px;
  margin: 50px auto;
  padding-bottom: 60px;
  border-radius: 20px;
  background-color:#282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width:1400px) {
    width:90%;
  }
`
export const InnerContainerBg = styled.div`
  width: 80%;
  min-height: 800px;
  border-radius: 40px;
  margin-top: 20px;
  padding-bottom: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top: 10px;
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

export const Return = styled.img`
    width: 90%;
    cursor:pointer;  
`

export const ArrowDiv=styled.div`
  width: 90%;
  display:flex;
  align-items:flex-start;
`

export const Card=styled.div`
  width:250px;
  height:200px;
  border-radius:30px;
  display:flex;
  margin-bottom: 30px;
  align-items:center;
  justify-content: center;
  background-color: #282828;
`

export const CardName=styled.div`
  color:white;
  display: flex;
  align-items:center;
  flex-direction: column;
  `

export const CardContainer=styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

`