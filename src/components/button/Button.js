import React from 'react';
import './Button.css';

const Button = ({onClick, icon = false, className, children}) => {
    return (
        <button type="button" className={className} onClick={onClick}>
            {icon ? <i className={icon}/> : null}
            {children}
        </button>

)
};

export default Button;