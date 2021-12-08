import styled from 'styled-components';


export const ModalBg = styled.div`
    background-color: white;
    box-shadow: 15px 15px 5px 0px rgba(0,0,0,0.4);
    display:flex;
    justify-content: center;
    width:100%;
    height: 95%;
    padding:40px;
    margin:10px;
    border-radius: 60px;
    
    @media(max-width:800px){
    width:90%;
    
  }
`
export const ModalDiv = styled.div`
display:flex;

`

export const CloseIcon = styled.img`
    width: 30px;
    height:30px;
    //margin-right: 10px;
    cursor: pointer;
`



export const Background = styled.div`
    height:100%;
    width: 100%;
    margin:0 auto;
    display: flex;
    justify-content: center;
    position:fixed; top: 0px; bottom:0px; left: 0px; right:0px;z-index: 1;
    background: rgba(0,0,0,0.6);
    
`