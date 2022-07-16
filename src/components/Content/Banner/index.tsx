import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import BannerBlock from './style'

interface BannerProps {
    
}

const Banner = () => {
    const options = useAppSelector(state => state.option);

    return (
        <BannerBlock options={options} contentEditable>
            {options.text} 
        </BannerBlock>
    );
}

export default Banner;