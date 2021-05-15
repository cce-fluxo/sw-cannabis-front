import React from 'react';
import {CloseIcon,Background,ModalBg, ModalDiv}from './styles.js';
import Close from '../../Assets/close.svg';
import {Link} from 'react-router-dom';


export default function Modal({ id = 'modal', onClose = () => {}, children,register}){ 
    const content=children
    const handleOutsideClick = (e) => {
      if (e.target.id === id && !register===true) onClose()
  };
    
    
    
    return (
        <Background id='modal' onClick={(e) => handleOutsideClick(e)}>
            <ModalBg >
                <ModalDiv>
                    {register?(<Link to='login'><CloseIcon onClick={onClose} src={Close}/></Link>):<CloseIcon onClick={onClose} src={Close}/>}
                    
                        {content}
                    
                </ModalDiv>
            </ModalBg>
        </Background>
    )
}