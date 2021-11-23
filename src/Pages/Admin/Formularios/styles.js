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

export const Card=styled.div`
  width:250px;
  height:200px;
  flex-direction: column;
  border-radius:30px;
  display:flex;
  margin-bottom: 30px;
  align-items:center;
 
  justify-content: center;
  background-color: #282828;
  margin: 20px;
  color: #fff;

  div{
    height:100%;
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: space-around;
  }
`

export const EditButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #789D55;
  border: none;
  margin-top: -10px;
  align-self: flex-end;
  display: flex;
  align-items:center;
  justify-content: center;
  cursor: pointer;
  transition: filter .2s;
  &:hover{
    filter: brightness(1.1);
  }
`

export const AddButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #789D55;
  border: none;
  display: flex;
  align-items:center;
  justify-content: center;
  cursor: pointer;
  transition: filter .2s;
  &:hover{
    filter: brightness(1.1);
  }
`


export const CardName = styled.h2`
  font-size: 26px;
  border-bottom: 1px solid #789D55;
`

export const CardDate = styled.small`
  span{
    margin-left: 10px;
  }

`