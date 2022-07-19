import React from 'react';
import { InputField } from './style'

interface InputProps {
    type: React.HTMLInputTypeAttribute;
    value?: string | number | readonly string[];
    accept?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    display?: 'block' | 'none';
}

const Input = React.forwardRef(({
    type,
    value,
    accept,
    onChange,
    display,
}: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {

    return (
        <InputField
            ref={ref}
            type={type}
            value={value}
            accept={accept}
            onChange={onChange}
            display={display}
        />
    );
});

export default Input