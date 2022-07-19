import React, { useRef, useState } from 'react';
import ColorPickerBlock, { Picker, PickerCircle } from './style'
import {SketchPicker, ColorResult} from 'react-color';
import useOutsideDetect from '../../../../hooks/useOutsideClick';

interface ColorPickerProps {
    color: string;
    onChangePicker: (color: ColorResult) => void;
}

const ColorPicker = ({
    color,
    onChangePicker
}:ColorPickerProps) => {
    const [isClick, setIsClick] = useState(false);
    const circleRef = useRef<HTMLDivElement>(null);
    
    useOutsideDetect(circleRef, () => {
        setIsClick(false);
    });
    
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
                            onChange={onChangePicker}
                        />
                    </Picker>
                }
            </PickerCircle>
        </ColorPickerBlock>
    );
}

export default ColorPicker;