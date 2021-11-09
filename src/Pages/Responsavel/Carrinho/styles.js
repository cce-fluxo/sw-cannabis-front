import styled from "styled-components";

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

export const ProductsContainer = styled.div`
  width: 80%;
  background-color: #fff;
  min-height: 400px;
  border-radius: 40px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Total = styled.div`
  width: 90%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  font-weight: bold;
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button{
      width: 120px;
      height: 25px;
      border-radius: 10px;
      background-color: #789D55;
      border: 0;
      font-weight: bold;
      transition: filter .2s;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      align-items: center;
      &:hover{
        filter: brightness(0.9);
      }
    }
  }
`

