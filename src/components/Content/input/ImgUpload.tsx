import React, { ChangeEvent, useState } from 'react';
import { InputField } from './style'

interface InputImgProps {
    type: React.HTMLInputTypeAttribute;
    onChange: (e: ChangeEvent<HTMLInputElement> | any) => void;
    AddBg: any;
}


const InputImg = React.forwardRef(({ type, onChange, AddBg }: InputImgProps, ref) => {
    console.log("addBg: " + AddBg);
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
