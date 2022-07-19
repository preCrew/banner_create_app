import React, { ChangeEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { changeBorderWidth, changeFontSize } from '../../../store/optionSlice'
import { InputField } from './style'

interface InputProps {
    inputValName: 'borderWidth' | 'fontSize' | 'heightRatio'
    changeInputFunction: 
        typeof changeBorderWidth | 
        typeof changeFontSize
    //children?: React.ReactNode;
    //result: number;
}

export default function InputBt({
    inputValName,
    changeInputFunction
}: InputProps) {
    const defaultNum = useAppSelector(state => state.option[inputValName])
    const dispatch = useAppDispatch()

    const [num, setNum] = React.useState<number>(defaultNum);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        let num = Number(e.target.value);
        setNum(num);
        dispatch(changeInputFunction(num))
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
