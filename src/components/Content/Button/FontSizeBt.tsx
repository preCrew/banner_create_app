import React, { ChangeEvent, useState } from 'react';
import { InputField } from './style'

interface FontSizeBt {

}

export default function FontSizeBt() {
    const [num, setNum] = React.useState<number>(60);

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
