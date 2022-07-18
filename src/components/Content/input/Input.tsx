import React from 'react';
import { InputField } from './style'

interface InputProps {
    type: React.HTMLInputTypeAttribute;
    value: string | number | readonly string[];
    onChange: () => void;
}

export default function InputBt({
    type,
    value,
    onChange,
}: InputProps) {

    return (
        <InputField
            type={type}
            value={value}
            onChange={onChange}
        />
    );
}
