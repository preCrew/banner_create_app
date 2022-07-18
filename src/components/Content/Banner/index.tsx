import React, { useState } from 'react';
import BannerBlock from './style'

export interface BannerProps {
    isImg: any,
}


const Banner = (imgUrl: any) => {
    console.log("imgUrl: " + imgUrl); //err: GET img-url:t; net::ERR_UNKNOWN_URL_SCHEME 
    //background-image: url에 imgUrl을 넣을수 없다고 하는듯

    return (
        <>
            <BannerBlock isImg={imgUrl}>

            </BannerBlock>
        </>
    );
}

export default Banner;
