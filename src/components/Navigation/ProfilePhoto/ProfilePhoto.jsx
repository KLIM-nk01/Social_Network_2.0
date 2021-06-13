import React from 'react';
import ProfilePhotoStyle from './ProfilePhoto.module.scss';
import Avatar from '../../../assets/Avatar.jpg'

const ProfilePhoto = () => {
    return (
        <div className={ProfilePhotoStyle.profilePhoto_wrapper}>
            <img src={Avatar} alt={'avatar'}/>
        </div>
    );
};

export default ProfilePhoto;