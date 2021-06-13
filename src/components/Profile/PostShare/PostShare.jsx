import React from 'react';
import PostShareStyle from './PostShareStyle.module.scss'
import Button from "../../Button/Button";


const PostShare = () => {
    return (
        <div className={PostShareStyle.postShare_wrapper}>
            <img src={''} alt={'ava'}/>
            <input type="text"/>
            <Button buttonName={'Share'}/>
        </div>
    );
};

export default PostShare;