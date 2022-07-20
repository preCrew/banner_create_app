import React from 'react';
import Banner from './Banner';
import Controls from './Controls';
import ContentBlock from './style'
import ImgInput from "./input/ImgUpload"
import { OnChangeUploadHandler } from "./Controls/index"

interface ContentProps {

}

const Content = () => {

    return (
        <ContentBlock>
            <Banner />
            <Controls />
        </ContentBlock>
    );
}

export const ImgUpload = () => {
    return (
        <>
            {/* 이미지 Upload */}
            <ImgInput type={"file"} onChange={OnChangeUploadHandler}></ImgInput>
        </>
    )
}

export default Content;