import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto 0;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  @media(max-width:800px){
    width:90%;
  }
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    >p{
      font-weight: bold;
      color: #789D55;
      margin-top: 10px;
    }
  }
`

export const AmountDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  input{
    width: 25px;
    margin-left: 10px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

`
export const AddButton = styled.button`
  width: 100px;
  height: 25px;
  border-radius: 20px;
  background-color: #789D55;
  border: 0;
  cursor: pointer;
  font-weight: bold;
  transition: filter .2s;
  &:hover{
    filter: brightness(90%);
  }
`