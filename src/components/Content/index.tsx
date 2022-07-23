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

    // bannerBg State Component
    // const AddBg = (newBg: string | any) => {
    //     console.log("!!!bannerBg: " + bannerBg.viewUrl);

    // }

    return (
        <ContentBlock>
            <Banner imgUrl={bannerBg.url} />
            <Controls AddBg={setBannerBg} />
        </ContentBlock>
    );
}



export default Content;