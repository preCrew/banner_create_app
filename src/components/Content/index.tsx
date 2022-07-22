import React, { useState } from 'react';
import Banner from './Banner';
import Controls from './Controls';
import ContentBlock from './style'


interface ContentProps {

}

const Content = () => {
    // bannerBg State
    const [bannerBg, setBannerBg] = useState({
        imageFile: "",
        viewUrl: ""
    });

    // bannerBg State Component
    const AddBg = (newBg: string | any) => {
        setBannerBg(newBg);
        console.log("!!!newBg: " + newBg);
        console.log("!!!bannerBg: " + bannerBg.imageFile);
        console.log("!!!bannerBg: " + bannerBg.viewUrl);

    }

    return (
        <ContentBlock>
            <Banner imgUrl={bannerBg.viewUrl} />
            <Controls AddBg={AddBg} />
        </ContentBlock>
    );
}



export default Content;