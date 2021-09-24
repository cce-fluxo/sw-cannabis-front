import styled from 'styled-components';

export const CalendarContainer=styled.div`
  padding: 15px;
  border-radius: 20px;
  background-color: #262626;
  //max-width: 400px;
  margin-bottom: 20px;
`

export const DropOptions = styled.select`
    width: 400px;
    text-align:center;
    cursor: pointer;
    margin-bottom: 25px;
    height: 55px;
    //border: 2px solid black;
    border-radius: 60px;
    padding-left:20px;
    color:white;
    font-size: 16px;
    font-weight:bold;
    border-color:${props=>
    {return props.validation===false?'red':'none'}};
    background-color:${props=>
    {return props.validation===false?'#fbdada':'#262626'}};
    &&:focus{
      border-color:${props=>
    {return props.validation===false?'red':'#789D55'}};
      
    }   
`


export const CheckContainer = styled.div`
  width:400px;
  margin:0 auto;
  padding:10px;
  border: 1px solid black;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 20px;
  margin-bottom: 15px;
  
`
export const CheckDiv = styled.div`
display: flex;
align-items: center;
font-size: 14px;
width: 120px;
margin: 5px;
`
export const CheckOption = styled.input`
  margin-right: 10px;
  cursor: pointer;
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


export const InfoIcon=styled.img`
    width:30px;
    cursor:pointer;
`

export const FullCalendarContainer=styled.div`
  width: 82%;
  
  //margin: 10px;
`