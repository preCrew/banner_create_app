import React, { ChangeEvent } from 'react';
import { ImgInputWrap, ImgInputField, ImgInputButton,ImgResetBtn } from './ImgUploadStyle'

interface InputImgProps {
    onChange: (e: ChangeEvent<HTMLInputElement> | any) => void;
    onChangeReset:() => void;
}



const InputImg = React.forwardRef(({ 
    onChange,
    onChangeReset 
}: InputImgProps, ref2) => {
    
    return (
        <ImgInputWrap>
            <ImgResetBtn onClick={onChangeReset}>(reset)</ImgResetBtn>
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
        </ImgInputWrap>

    );
});


export default InputImg;