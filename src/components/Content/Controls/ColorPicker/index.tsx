import React, { useRef, useState } from 'react';
import ColorPickerBlock, { Picker, PickerCircle } from './style'
import {SketchPicker, ColorResult} from 'react-color';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { changeBackgroundColor, changeBorderColor, changeForegroundColor } from '../../../../store/optionSlice';
import useOutsideDetect from '../../../../hooks/useOutsideClick';

interface ColorPickerProps {
    whosColorChange: 'backgroundColor' | 'foregroundColor' | 'borderColor';
    changeColorFunction: 
        | typeof changeBackgroundColor
        | typeof changeForegroundColor
        | typeof changeBorderColor;
}

const ColorPicker = ({
    whosColorChange,
    changeColorFunction
}:ColorPickerProps) => {
    const color =  useAppSelector(state=>state.option[whosColorChange]);
    const dispatch = useAppDispatch();

    const [isClick, setIsClick] = useState(false);
    const circleRef = useRef<HTMLDivElement>(null);
    
    useOutsideDetect(circleRef, () => {
        setIsClick(false);
    });
    

    const handleChangePicker = (color: ColorResult) => {
        dispatch(changeColorFunction(color.hex));
    };
    const handleClickPickerCircle = () => {
        setIsClick(!isClick);
    }

    return (
        <ColorPickerBlock>
            <PickerCircle 
                color={color}
                onClick={handleClickPickerCircle}
                ref={circleRef}
            >
                {isClick && 
                    <Picker>
                        <SketchPicker
                            color={color}
                            onChange={handleChangePicker}
                        />
                    </Picker>
                }
            </PickerCircle>
        </ColorPickerBlock>
    );
}

export default ColorPicker;