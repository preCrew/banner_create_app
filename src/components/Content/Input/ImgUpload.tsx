import React, { ChangeEvent } from 'react';
import { ImgInputField, ImgInputButton } from './ImgUploadStyle'

interface InputImgProps {
    onChange: (e: ChangeEvent<HTMLInputElement> | any) => void;
}



const InputImg = React.forwardRef(({ onChange }: InputImgProps, ref2) => {

    return (
        <>
            <ImgInputButton htmlFor="input-file">
                Upload
            </ImgInputButton>
            <ImgInputField
                id="input-file"
                type="file"
                accept="image/*"
                ref={ref2 as React.RefObject<HTMLInputElement>}
                onChange={onChange}
            />
        </>

    );
});


export default InputImg;