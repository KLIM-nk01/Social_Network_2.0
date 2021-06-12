import React from 'react';
import NavigationStyle from './NavigationStyle.module.scss';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={NavigationStyle.nav_wrapper}>
            <ProfilePhoto/>

            <div className={NavigationStyle.nav}>
                <NavLink to='/profile' activeClassName={NavigationStyle.activeLink}>My Profile</NavLink>
                <NavLink  to='/dialogs' activeClassName={NavigationStyle.activeLink}>Messenger</NavLink>
                <NavLink to='/news' activeClassName={NavigationStyle.activeLink}>News</NavLink>
                <NavLink to='/photo' activeClassName={NavigationStyle.activeLink}>Photo</NavLink>
                {/*<NavLink to='#' activeClassName={NavigationStyle.activeLink}>Friends</NavLink>*/}

            </div>

        </div>
    );
};

export default Navigation;