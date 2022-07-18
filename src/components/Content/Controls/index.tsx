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

interface ControlsProps {

}

// Img 업로더 스타일컴포넌트

const SImageArea = styled.img`
    width: inherit;
    height: inherit;
`;

const SImageWrapper = styled.div`
    width: 20px;
    height: 20px;
`;

const SCustomInput = styled.input`
    display: none;
`;

const Controls = () => {
    let test: number = 2;

    /*
    *
    이미지 업로드 기능
    *
    */
    const [imageFile, setImageFile] = useState<string | any>({
        imageFile: "",
        viewUrl: ""
    });

    const [loaded, setLoaded] = useState<boolean>(false);

    let imageRef: any;

    const onChangeUploadHandler = (e: ChangeEvent<HTMLInputElement> | any): void => {
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
            <Button onClick={() => { imageRef.click() }}>
                Upload
            </Button>

            {/* 이미지 view */}
            <SImageWrapper>
                {imageFile.imageFile !== "" ? (
                    <>
                        <SImageArea src={imageFile.viewUrl} />
                        {console.log("imageFile.viewUrl: " + imageFile.viewUrl)}
                        <Banner imgUrl={imageFile.viewUrl}></Banner>
                    </>
                ) : (
                    <></>
                )}
                {/* 이미지 input */}
                <SCustomInput
                    type="file"
                    accept="image/*"
                    ref={(refer) => (imageRef = refer)}
                    onChange={onChangeUploadHandler}
                />
            </SImageWrapper>

            {/* Height ratio */}
            <br />
            <h3>Height ratio</h3>
            <Input result={30}> </Input>
        </ControlsBlock>
    );
}

export default Controls;