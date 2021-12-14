import styled from "styled-components";

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
export const FormDate = styled.div`
  align-self: center;
  margin-bottom: 20px;
`

export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flext-start;
`

export const FormTitle = styled.h4`
  font-size: 30px;
  font-weight: bold;
  color: #282828;
  text-decoration: underline;
  text-decoration-color: #789D55;
  align-self: center;
  margin-bottom: 10px;

`

export const Question = styled.div`
  margin-bottom: 20px;
  width: 450px;
  color: #d3d3d3;
  border-radius: 15px;
  padding: 10px;
  background-color:#282828;

`


export const QuestionOptions = styled.div`
  display: flex;
  flex-direction: column;
  div + div{
    margin-top: 5px;
  }
`

export const Option = styled.div`
  display: flex;
`

export const CheckedButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;


  div{
    display: ${props => props.checked ? 'block' : 'none'};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #789D55;
  }
`

export const ModalConfirmationContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-self: center;
  color: #000;
  text-align: center;

  div{
    display: flex;
    justify-content: center;
    margin-top: 30px;

    button{
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      border-radius: 5px;
      border: none;
      color: #fff;
      background-color: #dd2342;
      cursor: pointer;
      transition: filter 0.2s;
      &:hover{
        filter: brightness(1.1);
      }
    }
    button + button{
      margin-left: 20px;
      background-color: #789D55;
      div{
        margin-bottom: 25px;
      }
      
    }
  }

`

export const SendFormButton = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #789D55;
  align-self: center;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover{
    filter: brightness(1.1);
  }

`