import React, { ChangeEvent, useState } from 'react';
import { InputField } from './style'

interface InputImgProps {
    type: React.HTMLInputTypeAttribute;
    onChange: (e: ChangeEvent<HTMLInputElement> | any) => void;
}


const InputImg = React.forwardRef(({ type, onChange }: InputImgProps, ref2) => {
    // console.log("ref: " + ref2);


    return (
        <InputField
            type={type}
            accept="image/*"
            ref={ref2 as React.RefObject<HTMLInputElement>}
            onChange={onChange}
        />

    );
});


export default InputImg;
