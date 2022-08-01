import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { changeText, changeBackgroundImg } from '../../../store/optionSlice';
import BannerBlock, { BannerText, BannerImgBlock } from './style'
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

    const options = useAppSelector(state => state.option);
    const dispatch = useAppDispatch();

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        dispatch(changeText(e.currentTarget.innerText));
    }

    return (
        <BannerBlock
            className='banner'
            options={options}
            style={options.textAlignment}
        >
            <BannerText
                onInput={handleInput}
                contentEditable
                suppressContentEditableWarning
            >
                {/* 초기값 */}
                Edit Me
            </BannerText>
        </BannerBlock>
    );
}





export default Banner;