import React from 'react';
import PostStyle from './PostStyle.module.scss'
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";



const Posts = (props) => {
    return (
        <div className={PostStyle.post_wrapper}>
            <PostHeader/>
            <PostContent  contentMessage={props.contentMessage} id={props.id}/>
            {/*<PostFooter/>*/}

        </div>
    );
};

export default Posts;