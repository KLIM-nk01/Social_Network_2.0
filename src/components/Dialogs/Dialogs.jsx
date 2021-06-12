import React from 'react';
import DialogsStyle from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";

import {NavLink} from "react-router-dom";
import Message from "./Message/Message";






const Dialogs = (props) => {
    let dialogs = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messages = props.messagesData.map(mess => <Message message={mess.message}/>);
    
    return (
        <div className={DialogsStyle.dialogs_wrapper}>
            <div className={DialogsStyle.columnOne}>

                {dialogs}

            </div>
            <div className={DialogsStyle.columnTwo}>
                {messages}
            </div>


        </div>
    );
};

export default Dialogs;