import React, { useState } from 'react';
import Banner from './Banner';
import Controls, { ImgUpload } from './Controls';
import ContentBlock from './style'


interface ContentProps {

}

const Content = () => {

    const [bannerBg, setBannerBg] = useState("");

    const AddBg = (newBg: any) => {
        setBannerBg(newBg);
        console.log("!!!newBg: " + newBg);

    }

    return (
        <ContentBlock>
            <Banner imgUrl={bannerBg} />
            <Controls AddBg={AddBg} />
        </ContentBlock>
    );
}



export default Content;