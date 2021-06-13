import React from 'react';
import NavigationStyle from './NavigationStyle.module.scss';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={NavigationStyle.nav_wrapper}>


            <div className={NavigationStyle.nav}>
                <ProfilePhoto/>
                <NavLink to='/profile' activeClassName={NavigationStyle.active}>My Profile</NavLink>
                <NavLink  to='/dialogs' activeClassName={NavigationStyle.active}>Messenger</NavLink>
                <NavLink to='/news' activeClassName={NavigationStyle.active}>News</NavLink>
                <NavLink to='/photo' activeClassName={NavigationStyle.active}>Photo</NavLink>
                <NavLink to='' activeClassName={NavigationStyle.active}>Friends</NavLink>

            </div>

        </div>
    );
};

export default Navigation;