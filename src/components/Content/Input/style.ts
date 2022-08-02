import styled from "styled-components";

interface TInputField {
    display?: 'block' |'none';
}
export const InputField = styled.input<TInputField>`
    border-radius: 4px;
    background: #000;
    color: #fff;
    font-size: 18px;
    line-height: 2;
    padding: 2px 2px 2px 8px;
    width: 56px;
    display:${({display}) => display || 'block'};
`
// export const InputFieldInline = styled(InputField)`
//     display:inline-block;
// `