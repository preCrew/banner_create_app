import React, { ChangeEvent, useState } from 'react';
import Banner from './Banner';
import Controls from './Controls';
import ContentBlock, { SCustomInput } from './style'
import styled from "styled-components";
interface ContentProps {

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



const Content = () => {

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
        <ContentBlock>
            <Banner imgUrl={imageFile.viewUrl} />
            <Controls />

            {/* 이미지 view */}
            <SImageWrapper>
                {imageFile.imageFile !== "" ? (
                    <>
                        <SImageArea src={imageFile.viewUrl} />
                        {console.log("imageFile.viewUrl: " + imageFile.viewUrl)}

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
        </ContentBlock>
    );
}

export default Content;