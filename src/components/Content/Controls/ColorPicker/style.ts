import styled, { css } from "styled-components";
import {darken} from 'polished'

interface TPickerCircle {
    color: string;
}

export default styled.div`
    height: 100%;
    position: relative;
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
    z-index: 1;
`;

export const Picker = styled.div`
    position: absolute;
    left: -220px;
    top: 20px;
    z-index: 1;
`;