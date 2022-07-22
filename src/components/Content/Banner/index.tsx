import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { changeText } from '../../../store/optionSlice';
import BannerBlock, { BannerText } from './style'

interface BannerProps {
    
}

const Banner = () => {
    const options = useAppSelector(state => state.option);
    const dispatch = useAppDispatch();

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        dispatch(changeText(e.currentTarget.innerText));
    }

    return (
        <BannerBlock 
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