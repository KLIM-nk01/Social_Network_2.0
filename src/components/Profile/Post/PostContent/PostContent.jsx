import React from 'react';
import PostContentStyle from './PostContentStyle.module.scss'


const PostContent = (props) => {
    return (
        <div className={PostContentStyle.postContent_wrapper}>
            {props.contentMessage}
            <span>{props.id}</span>
        </div>
    );
};

export default PostContent;