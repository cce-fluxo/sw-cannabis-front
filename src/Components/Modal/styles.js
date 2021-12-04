import styled from 'styled-components';


export const ModalBg = styled.div`
    background-color: white;
    box-shadow: 15px 15px 5px 0px rgba(0,0,0,0.75);
    display:flex;
<<<<<<< HEAD
=======
    justify-content: center;
>>>>>>> carrinho
    width:600px;
    height: 400px;
    padding:40px;
    margin-top:10%;
    border-radius: 60px;
<<<<<<< HEAD
=======
    @media(max-width:800px){
    width:90%;
    
  }
>>>>>>> carrinho
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
<<<<<<< HEAD
    justify-content: center;
    position:fixed; top: 0px; bottom:0px; left: 0px; z-index: 1;
=======
   
    justify-content: center;
    position:fixed; top: 0px; bottom:0px; left: 0px; right:0px;z-index: 1;
>>>>>>> carrinho
    background: rgba(0,0,0,0.6);
`