import React from 'react';
import PostContentStyle from './PostContentStyle.module.scss'


const PostContent = (props) => {
    return (
        <div className={PostContentStyle.postContent_wrapper}>
            {props.massage}
        </div>
    );
};

export default PostContent;