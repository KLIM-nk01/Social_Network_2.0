import React from 'react';
import ButtonStyle from './Button.module.scss'


const Button = (props) => {
    return (
        <div className={ButtonStyle.button_wrapper}>
            <button>{props.buttonName}</button>
        </div>
    );
};

export default Button;