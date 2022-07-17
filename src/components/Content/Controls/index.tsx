import React, { useState } from 'react';
import ControlsBlock from './style'

import ControlsBox from './ControlsBox';
import ColorPicker from './ColorPicker';
import { changeBackgroundColor, changeBorderColor, changeForegroundColor } from '../../../store/optionSlice';

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
        </ControlsBlock>
    );
}

export default Controls;