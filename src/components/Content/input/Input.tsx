import React, { ChangeEvent } from 'react';
import { InputField } from './style'

interface InputProps {
}

export default function InputBt({
    
}: InputProps) {

    return (
        <InputField
            type="number"
            value={num}
            onChange={handleChange}
        />
    );
}
