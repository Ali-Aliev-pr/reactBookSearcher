import React from 'react';
import './modal.css';

function Modal({text, active, setActive}) {
    return(
        <div className={active ? 'modal' : 'modal__none'}>
            <button onClick={() => setActive(false)}>Закрыть!</button>
            <p>{text}</p>
        </div>
    )
}

export default Modal;