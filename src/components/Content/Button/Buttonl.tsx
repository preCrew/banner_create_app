import React, {useState} from 'react';
import { ButtonStyle } from './style';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({
    children,
    onClick
}: ButtonProps) => {
    return (
        <ButtonStyle
            onClick={onClick}
        > {children} </ButtonStyle>
    );
}

export default Button;