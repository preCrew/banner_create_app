import React, {useState} from 'react';
import ControlsBlock from './style'

import ControlsBox from './ControlsBox';

interface ControlsProps {
    
}

const Controls = () => {
    return (
        <ControlsBlock>
            <ControlsBox title="BackgroundColor"/>
        </ControlsBlock>
    );
}

export default Controls;