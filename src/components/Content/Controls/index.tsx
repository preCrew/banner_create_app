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

}

export const ImgUpload = (props: any) => {
    return (
        <>

        </>
    )
}

/*
*
이미지 업로드 기능
*
*/


const OnChangeUploadHandler = (e: ChangeEvent<HTMLInputElement> | any, AddBg: any): void => {
    const [imageFile, setImageFile] = useState<string | any>({
        imageFile: "",
        viewUrl: ""
    });

    const [loaded, setLoaded] = useState<boolean>(false);


    console.log("사진 업로드 버튼 클릭");
    e.preventDefault();

    const fileReader = new FileReader();
    if (e.target.files[0]) {
        setLoaded(true);
        fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
        setImageFile({
            imageFile: e.target.files[0],
            viewUrl: fileReader.result
        });
        setLoaded(true);
    };

    console.log(imageFile.viewUrl);
    console.log(loaded);

    const { value } = imageFile.viewUrl;
    console.log("value: " + value);
    const { addBgFc } = AddBg;
    addBgFc(value);


};

export default function Controls(props: any) {
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
            {/* 이미지 Upload */}
            <ImgInput type={"file"} onChange={() => OnChangeUploadHandler} AddBg={props.AddBg}></ImgInput>
            {/* Height ratio */}
            <br />
            <h3>Height ratio</h3>
            <Input result={30}> </Input>
        </ControlsBlock>
    );
}
