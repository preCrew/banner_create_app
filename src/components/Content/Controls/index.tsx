import React, { useState } from 'react';
import ControlsBlock from './style'

import ControlsBox from './ControlsBox';
import ColorPicker from './ColorPicker';
import { 
    changeBackgroundColor, changeBorderColor, changeBorderWidth, 
    changeFontSize, changeForegroundColor, changeHeightRatio ,
    changeTextShadow
} from '../../../store/optionSlice';
import Input from '../input';
import {useAppDispatch, useAppSelector} from '../../../store/hooks'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const Controls = () => {
    const {
        borderWidth, 
        fontSize, 
        textShadow, 
        heightRatio
    } = useAppSelector( state => state.option)
    const dispatch = useAppDispatch();

    const handleChangeBorderWidth = (e: InputChangeEvent) => {
        dispatch(changeBorderWidth(e.target.valueAsNumber));
    }
    const handleChangeFontSize = (e: InputChangeEvent) => {
        dispatch(changeFontSize(e.target.valueAsNumber));
    }
    const handleChangeTextShadow = (e: InputChangeEvent, type: 'x' | 'y' | 'blur') => {
        dispatch(changeTextShadow({type, value: e.target.valueAsNumber}));
    }
    const handleChangeHeighRatio = (e: InputChangeEvent) => {
        dispatch(changeHeightRatio(e.target.valueAsNumber));
    }

    return (
        <ControlsBlock>
            <ControlsBox title="Background color">
                <ColorPicker
                    whosColorChange={'backgroundColor'}
                    changeColorFunction={changeBackgroundColor}
                />
            </ControlsBox>
            <ControlsBox title="Foreground color">
                <ColorPicker
                    whosColorChange={'foregroundColor'}
                    changeColorFunction={changeForegroundColor}
                />
            </ControlsBox>
            <ControlsBox title="Border color">
                <ColorPicker
                    whosColorChange={'borderColor'}
                    changeColorFunction={changeBorderColor}
                />
            </ControlsBox>
            <ControlsBox title="Border width">
                <Input
                    type={'number'}
                    value={borderWidth}
                    onChange={handleChangeBorderWidth}
                />
            </ControlsBox>          
            <ControlsBox title="Font size">
                <Input
                    type={'number'}
                    value={fontSize}
                    onChange={handleChangeFontSize}
                />
            </ControlsBox>   
            <ControlsBox title="Height ratio">
                <Input
                    type={'number'}
                    value={heightRatio}
                    onChange={handleChangeHeighRatio}
                />
            </ControlsBox>               
        </ControlsBlock>
    );
}

export default Controls;