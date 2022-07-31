import React, { useState } from 'react';
import Banner from './Banner';
import Controls from './Controls';
import ContentBlock from './style'
import { useAppDispatch } from '../../store/hooks';
import { changeBackgroundImg } from '../../store/optionSlice';

interface ContentProps {

}


const Content = () => {
    // bannerBg State
    const [bannerBg, setBannerBg] = useState<string | any>({
        img: '',
        url: '',
    });

    const HandleChangeBackgroundImg = (url: any) => {
        const dispatch = useAppDispatch();
        dispatch(changeBackgroundImg(url));
    }

    HandleChangeBackgroundImg(bannerBg.url);

    return (
        <ContentBlock>
            <Banner />
            <Controls AddBg={setBannerBg} />
        </ContentBlock>
    );
}

export default Content;