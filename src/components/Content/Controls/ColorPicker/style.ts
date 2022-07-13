import styled, { css } from "styled-components";
import {darken} from 'polished'

interface TPickerCircle {
    color: string;
}

export default styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 100;
`;

export const PickerCircle = styled.div<TPickerCircle>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    ${({color}) => css`
        background: ${color};
        border: 3px solid ${darken(0.2, color)};
    `};

    cursor: pointer;
`;

export const Picker = styled.div`
    position: absolute;
    left: -220px;
    top: 20px;
`;