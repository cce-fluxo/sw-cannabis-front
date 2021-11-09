import React from 'react';
import {CloseIcon,Background,ModalBg, ModalDiv}from './styles.js';
import Close from '../../Assets/close.svg';
import {Link} from 'react-router-dom';


export default function BigModal({ id = 'modal', onClose = () => {}, children}){ 
    const content=children
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose()
    };
      
    
    
    
    return (
        <Background id='modal' onClick={(e) => handleOutsideClick(e)}>
            <ModalBg >
                
                    <CloseIcon onClick={onClose} src={Close}/>
                    
                        {content}
                    
                
            </ModalBg>
        </Background>
    )
}