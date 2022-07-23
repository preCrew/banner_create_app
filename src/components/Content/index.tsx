import React, { useState } from 'react';
import Banner from './Banner';
import Controls from './Controls';
import ContentBlock from './style'


interface ContentProps {

}

const Content = () => {
    // bannerBg State
    const [bannerBg, setBannerBg] = useState<string | any>({
        img: '',
        url: '',
    });

    return (
        <ContentBlock>
            <Banner imgUrl={bannerBg.url} />
            <Controls AddBg={setBannerBg} />
        </ContentBlock>
    );
}



export default Content;