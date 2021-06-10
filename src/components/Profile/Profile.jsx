import React from 'react';
import ProfileStyle from './ProfileStyle.module.scss';
import PageLikeList from "./PageLikeList/PageLikeList";
import PostShare from "./PostShare/PostShare";
import RecentNotifications from "./RecentNotifications/RecentNotifications";
import Post from "./Post/Post";
import Advertizement from "./Advertizement/Advertizement";

const Profile = () => {
    return (
        <div className={ProfileStyle.profile_wrapper}>
            <div className={ProfileStyle.column}>
                <PageLikeList/>
            </div>
            <div className={ProfileStyle.column}>
                <PostShare/>
                <Post massage='Hi, this it my first post'/>
            </div>
            <div className={ProfileStyle.column}>
                <RecentNotifications/>
                <Advertizement/>
            </div>
        </div>
    );
};

export default Profile;