import React from 'react';
import './Button.css';

const Button = ({onClick}) => {
    return (
        <button type="button" className="button-add" onClick={onClick}>
            <i className="fa fa-plus icon"/>
            Add new line
        </button>

)
};

export default Button;