import styled from "styled-components";

export const ImgInputField = styled.input.attrs({ type: 'file' })`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`

export const ImgInputButton = styled.label`
    width: 96px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    border-radius: 4px;
    background: #000;
    color: #fff;
    font-size: 18px;
    line-height: 2;
    cursor: pointer;
`

export const InputFieldInline = styled(ImgInputField)`
    display:inline-block;
`