import React from 'react';
import DialogItemStyle from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (

        <div className={DialogItemStyle.dialogItem_wrapper}>
            <NavLink to={`/dialogs/${props.id}`}>
                <img src={'#'} alt={'avatar'}/>
                <span>{props.name}</span>
                <button>close</button>
            </NavLink>
        </div>

    );
};

export default DialogItem;