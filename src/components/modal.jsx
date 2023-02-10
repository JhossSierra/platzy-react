import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/modalBackground.css';

export function Modal({children}) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
        {children}
        </div>
        , document.getElementById('modal')
        
    )

}