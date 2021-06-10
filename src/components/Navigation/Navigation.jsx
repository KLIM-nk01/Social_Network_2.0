import React from 'react';
import NavigationStyle from './NavigationStyle.module.scss';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={NavigationStyle.nav_wrapper}>
            <ProfilePhoto/>

            <div className={NavigationStyle.nav}>
                <NavLink to='/profile'>My Profile</NavLink>
                <NavLink to='/dialogs'>Messenger</NavLink>
                <a href='#'>News</a>
                <a href='#'>Friends</a>
                <a href='#'>Photo</a>
            </div>

        </div>
    );
};

export default Navigation;