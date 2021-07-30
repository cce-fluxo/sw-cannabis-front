import styled from 'styled-components';

export const ContainerBg = styled.div`
  max-width: 1280px;
  //min-height: 700px;
  margin: 50px auto;
  border-radius: 20px;
  background-color:#282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:40px;
  @media(max-width:1400px) {
    width:90%;
  }
`

export const InnerTitle = styled.p`
  margin: 20px;
  font-size: 20px;
  text-align:center;
  
`

export const InnerContainerBg = styled.div`
  width: 80%;
  //min-height: 1300px;
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 60px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top: 10px;
  padding-bottom: 40px;
`

export const Table=styled.div`
    border: 1px solid black;
    padding: 20px;
    display: flex;
    font-size:20px;
    font-weight:normal;
    align-items: center;
    justify-content:space-between;
    width:60%;
`

export const InnerTable=styled.div`
    

`

export const InfoIcon=styled.img`
    width:30px;
`