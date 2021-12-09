import styled from 'styled-components';

export const ContainerBg = styled.div`
  max-width: 1280px;
  //min-height: 500px;
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
  //min-height: 200px;
  border-radius: 40px;
  margin-top: 20px;
  padding-bottom: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  
  padding-top: 30px;
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
  margin: 20px;
`

export const CardName=styled.div`
  color:white;
  display: flex;
  align-items:center;
  text-align: center;
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