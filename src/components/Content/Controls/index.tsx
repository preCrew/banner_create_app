import React, { useState } from 'react';
import ControlsBlock from './style'
import DownLoadBt from '../Button/downLoadBt'
import RandomizeBt from '../Button/randomizeBt'
import BackGroundBt from '../Button/backGroundBt'
import ForeGroundBt from '../Button/foreGroundBt'
import BorderBt from '../Button/borderBt'
import BorderWidthBt from '../Button/borderWidthBt'
import FontSizeBt from '../Button/FontSizeBt'
import TextAlignment from '../Button/TextAlignment'
import UploadBt from '../Button/uploadBt'

interface ControlsProps {

}

const Controls = () => {
    let test: number = 2;
    return (
        <ControlsBlock>
            {/* DownloadBt &  RandomizeBt */}
            <DownLoadBt></DownLoadBt>
            <RandomizeBt></RandomizeBt>

            {/* BackGround color */}
            <br />
            <h3>BackGround color</h3>
            <BackGroundBt></BackGroundBt>

            {/* ForeGround color */}
            <br />
            <h3>ForeGround color</h3>
            <ForeGroundBt></ForeGroundBt>

            {/* Border color */}
            <br />
            <h3>Border color</h3>
            <BorderBt></BorderBt>

            {/* BorderWidth */}
            <br />
            <h3>BorderWidth</h3>
            <BorderWidthBt></BorderWidthBt>

            {/* FontSize */}
            <br />
            <h3>FontSize</h3>
            <FontSizeBt></FontSizeBt>

            {/* Text Alignment */}
            <br />
            <h3>Text alignment</h3>
            <TextAlignment></TextAlignment>

            {/* Upload */}
            <br />
            <h3>BackGround Upload</h3>
            <UploadBt></UploadBt>
        </ControlsBlock>
    );
}

export default Controls;