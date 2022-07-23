import React, { useState } from 'react';
import BannerBlock from './style'

export interface BannerProps {
    isImg: any,
}


const Banner = (url: any) => {

    return (
        <>
            <BannerBlock isImg={url}>

            </BannerBlock>
        </>
    );
}

export default Banner;
