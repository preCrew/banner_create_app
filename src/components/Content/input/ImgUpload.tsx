import React, { ChangeEvent } from 'react';
import { InputField } from './style'

interface InputImgProps {
    type: React.HTMLInputTypeAttribute;
    onChange: (e: ChangeEvent<HTMLInputElement> | any) => void;
}


const InputImg = React.forwardRef(({ type, onChange }: InputImgProps, ref) => {

    console.log("ref: " + ref);

    return (
        <InputField
            type={type}
            accept="image/*"
            ref={ref as React.RefObject<HTMLInputElement>}
            onChange={onChange}
        />

    );
});


export default InputImg;
