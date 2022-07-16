import styled from "styled-components";

export const ControlsLayout = styled.div`
    display: flex;
    flex-direction: ${props => props.className ? 'row' && 'column' : 'row'}
`
export const ControlsTitle = styled.h3`
    font-size: ${props => props.theme.font.size.fs22}
`;