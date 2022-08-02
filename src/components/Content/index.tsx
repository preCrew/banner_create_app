import React, { useState } from 'react';
import Banner from './Banner';
import Controls from './Controls';
import ContentBlock from './style'
import { useAppDispatch } from '../../store/hooks';
import { changeBackgroundImg } from '../../store/optionSlice';

interface ContentProps {

}


const Content = () => {

    return (
        <ContentBlock>
            <Banner />
            <Controls/>
        </ContentBlock>
    );
}

export default Content;