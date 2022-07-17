import React, { useState } from 'react';
import BannerBlock from './style'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

interface BannerProps {

}

export const onHtmlToPng = () => {
    const box = document.querySelector('.banner') as HTMLDivElement;
    domtoimage
        .toBlob(box)
        .then((blob) => {
            saveAs(blob, 'banner.png');
        });
}

const Banner = () => {
    return (
        <BannerBlock className='banner'>

        </BannerBlock>
    );
}

export default Banner;