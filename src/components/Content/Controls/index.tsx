import React, { ChangeEvent, useState, useRef } from 'react';
import ControlsBlock from './style'
import BackGroundBt from '../Button/backGroundBt'
import ForeGroundBt from '../Button/foreGroundBt'
import BorderBt from '../Button/borderBt'
import TextAlignment from '../Button/TextAlignment'
import Button from '../Button/Buttonl';
import Input from '../input/Input'

import ImgInput from "../input/ImgUpload"

interface ControlsProps {
    AddBg: (Object: string | any) => void
}

/*
*
이미지 업로드 기능
*
*/




export default function Controls({ AddBg }: ControlsProps) {
    let test: number = 2;

    const ImgUploadRef = useRef();

    const OnChangeUploadHandler = (e: ChangeEvent<HTMLInputElement> | any): void => {

        console.log("사진 업로드 버튼 클릭");
        console.log(e.target.files);

        e.preventDefault();

        // const fileReader = new FileReader();
        // if (e.target.files[0]) {

        //     fileReader.readAsDataURL(e.target.files[0]);
        // }
        // fileReader.onload = () => {

        //     AddBg({
        //         imageFile: e.target.files[0],
        //         viewUrl: fileReader.result
        //     });


        // };

        const url = URL.createObjectURL(e.target.files[0]);
        AddBg({
            imageFile: e.target.files[0],
            viewUrl: url
        })




    };

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
            {/* 이미지 Upload */}
            <ImgInput type={"file"} onChange={OnChangeUploadHandler} ref={ImgUploadRef} ></ImgInput>
            {/* Height ratio */}
            <br />
            <h3>Height ratio</h3>
            <Input result={30}> </Input>
        </ControlsBlock>
    );
}
