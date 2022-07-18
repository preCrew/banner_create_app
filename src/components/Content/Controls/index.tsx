import React, { ChangeEvent, useState } from 'react';
import ControlsBlock from './style'
import BackGroundBt from '../Button/backGroundBt'
import ForeGroundBt from '../Button/foreGroundBt'
import BorderBt from '../Button/borderBt'
import TextAlignment from '../Button/TextAlignment'
import Button from '../Button/Buttonl';
import Input from '../input/Input'
import styled from "styled-components";
import Banner from '../Banner/index'
import SCustomInput from '../style'

interface ControlsProps {

}



const Controls = () => {
    let test: number = 2;



    return (
        <ControlsBlock>
            {/* DownloadBt &  RandomizeBt */}
            <Button onClick={() => { alert("Download click!!"); }}>
                Download 🚀
            </Button>
            <Button onClick={() => { alert("Randomize click!!"); }}>
                Randomize ✨
            </Button>

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
            <Input result={0}> </Input>

            {/* FontSize */}
            <br />
            <h3>FontSize</h3>
            <Input result={60}> </Input>

            {/* Text Alignment */}
            <br />
            <h3>Text alignment</h3>
            <TextAlignment></TextAlignment>

            {/* Upload */}
            <br />
            <h3>BackGround Upload</h3>
            <Button onClick={() => { <SCustomInput></SCustomInput> }}>
                Upload
            </Button>

            {/* Height ratio */}
            <br />
            <h3>Height ratio</h3>
            <Input result={30}> </Input>
        </ControlsBlock>
    );
}

export default Controls;