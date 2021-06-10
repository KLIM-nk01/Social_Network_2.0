import React from 'react';
import NavigationStyle from './NavigationStyle.module.scss';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const Navigation = () => {
    return (
        <div className={NavigationStyle.nav_wrapper}>
            <ProfilePhoto/>

            <div className={NavigationStyle.nav}>
                <a href='#'>My Profile</a>
                <a href='#'>News</a>
                <a href='#'>Messenger</a>
                <a href='#'>Friends</a>
                <a href='#'>Photo</a>
            </div>

        </div>
    );
};

export default Navigation;