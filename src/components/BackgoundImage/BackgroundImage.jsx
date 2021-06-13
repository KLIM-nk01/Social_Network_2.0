import React from 'react';
import BackgroundImageStyle from './BackgroundImageStyle.module.scss';
import ImgSrc from '../../assets/profile-banner.jpg'
const BackgroundImage = () => {
    return (
        <div className={BackgroundImageStyle.backgroundImage_wrapper}>
           <img alt={'img'} src={ImgSrc}/>
        </div>
    );
};

export default BackgroundImage;