import React from 'react';
import MessageStyle from './Message.module.scss';

const Message = (props) => {
    return (
        <div className={MessageStyle.message_wrapper}>
            <img src={'#'} alt={'ava'}/>
            <span>{props.message}</span>
            <span>time</span>
        </div>
    );
};

export default Message;