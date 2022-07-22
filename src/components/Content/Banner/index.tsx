import React, { useState } from 'react';
import BannerBlock from './style'

export interface BannerProps {
    isImg: any,
}


const Banner = (imgUrl: any) => {

    console.log("imgUrl: " + imgUrl);


    return (
        <>
            <BannerBlock isImg={imgUrl}>

            </BannerBlock>
        </>
    );
}

export default Banner;
