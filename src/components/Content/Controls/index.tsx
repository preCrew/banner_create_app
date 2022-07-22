import React, { useState } from 'react';
import ControlsBlock from './style'

import ControlsBox from './ControlsBox';
import ColorPicker from './ColorPicker';
import { 
    changeBackgroundColor, changeBorderColor, changeBorderWidth, 
    changeFontSize, changeForegroundColor, changeHeightRatio ,
    changeTextShadow, changeTextAlignment
} from '../../../store/optionSlice';
import Input from '../Input';
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import { ColorResult } from 'react-color';
import TextAlignment from '../Button/TextAlignment';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const Controls = () => {
    const options = useAppSelector( state => state.option)
    const dispatch = useAppDispatch();

    const handleChangeBackgroundColor = (color: ColorResult) => {
        dispatch(changeBackgroundColor(color.hex));
    }
    const handleChangeForegroundColor = (color: ColorResult) => {
        dispatch(changeForegroundColor(color.hex));
    }
    const handleChangeBorderColor = (color: ColorResult) => {
        dispatch(changeBorderColor(color.hex));
    }
    const handleChangeTextShadowColor = (color: ColorResult) => {
        dispatch(changeTextShadow({type: 'color', value: color.hex}));
    }

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
                    color={options.backgroundColor}
                    onChange={handleChangeBackgroundColor}
                />
            </ControlsBox>
            <ControlsBox title="Foreground color">
                <ColorPicker
                    color={options.foregroundColor}
                    onChange={handleChangeForegroundColor}
                />
            </ControlsBox>
            <ControlsBox title="Border color">
                <ColorPicker
                    color={options.borderColor}
                    onChange={handleChangeBorderColor}
                />
            </ControlsBox>
            <ControlsBox title="Border width">
                <Input
                    type={'number'}
                    value={options.borderWidth}
                    onChange={handleChangeBorderWidth}
                />
            </ControlsBox>          
            <ControlsBox title="Font size">
                <Input
                    type={'number'}
                    value={options.fontSize}
                    onChange={handleChangeFontSize}
                />
            </ControlsBox>   
            {/* Text Shadow */}
            <ControlsBox 
                title='Text Shadow'
                flexDirection='column'
                alignItems='flex-start'
            >   
                <ControlsBox justifyContent='space-around'>
                    <ControlsBox title="X" justifyContent='space-around'>
                        <Input
                            type={'number'}
                            value={options.textShadow.x}
                            onChange={e => { handleChangeTextShadow(e,"x") }}
                        />
                    </ControlsBox>
                    <ControlsBox title="Y" justifyContent='space-around'>
                        <Input
                            type={'number'}
                            value={options.textShadow.y}
                            onChange={e => { handleChangeTextShadow(e,"y") }}
                        />
                    </ControlsBox>
                    <ControlsBox title="Blur" justifyContent='space-around'>
                        <Input
                            type={'number'}
                            value={options.textShadow.blur}
                            onChange={e => { handleChangeTextShadow(e,"blur") }}
                        />
                    </ControlsBox>
                    <ColorPicker
                        color={options.textShadow.color}
                        onChange={handleChangeTextShadowColor}
                    />
                </ControlsBox>
            </ControlsBox>
            <ControlsBox 
                title="Text alignment"
                flexDirection="column"
                alignItems='flex-start'
            >
                <TextAlignment options={options}/>
            </ControlsBox>
            <ControlsBox title="Height ratio">
                <Input
                    type={'number'}
                    value={options.heightRatio}
                    onChange={handleChangeHeighRatio}
                />
            </ControlsBox>               
        </ControlsBlock>
    );
}

export default Controls;