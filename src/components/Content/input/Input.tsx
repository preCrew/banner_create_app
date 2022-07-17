import React, { ChangeEvent, useState } from 'react';
import { InputField } from './style'

interface InputProps {
    children: React.ReactNode;
    result: number;
}

export default function InputBt({
    result,
}: InputProps) {
    const [num, setNum] = React.useState<number>(result);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        let num = Number(e.target.value);
        setNum(num);

    };

    return (
        <InputField
            id="borderw"
            type="number"
            name="username"
            value={num}
            onChange={handleChange}
            min="0"
        />
    );
}
