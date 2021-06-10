import React from 'react';
import DialogsStyle from './Dialogs.module.scss';
import Dialog from "./Dialog/Dialog";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
    return (
        <div className={DialogsStyle.dialogs_wrapper}>

                <Dialog/>
                <Chat/>


        </div>
    );
};

export default Dialogs;