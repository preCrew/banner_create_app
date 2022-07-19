import React, { useState } from 'react';
import ControlsBlock from './style'

import ControlsBox from './ControlsBox';
import ColorPicker from './ColorPicker';
import Input from '../Input';
import { 
    changeBackgroundColor, changeBorderColor, changeBorderWidth, 
    changeFontSize, changeForegroundColor, changeHeightRatio 
} from '../../../store/optionSlice';

interface ControlsProps {

}

const Controls = () => {

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
                    inputValName='borderWidth'
                    changeInputFunction={changeBorderWidth}
                />
            </ControlsBox>          
            <ControlsBox title="Font size">
                <Input 
                    inputValName='fontSize'
                    changeInputFunction={changeFontSize}
                />
            </ControlsBox>   
            <ControlsBox title="Height ratio">
                <Input 
                    inputValName='heightRatio'
                    changeInputFunction={changeHeightRatio}
                />
            </ControlsBox>               
        </ControlsBlock>
    );
}

export default Controls;