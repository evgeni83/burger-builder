import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={ classes.Modal }
             style={ {
                 transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0',
             } }>
            { props.children }
        </div>
    );
};

export default Modal;