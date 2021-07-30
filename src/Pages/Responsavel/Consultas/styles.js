import styled from 'styled-components';

export const ContainerBg = styled.div`
  max-width: 1280px;
  min-height: 700px;
  margin: 50px auto;
  border-radius: 20px;
  background-color:#282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  @media(max-width:1400px) {
    width:90%;
  }
`


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

export const InnerContainerBg = styled.div`
  width: 80%;
  min-height: 400px;
  border-radius: 40px;
  margin-top: 20px;
  padding-bottom: 60px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

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

export const ContainerTitle=styled.p`
  font-weight: 24px;
  padding: 10px;
`