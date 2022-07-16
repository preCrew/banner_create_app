import styled from "styled-components";

export const ControlsLayout = styled.div`
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.className ? 'row' && 'column' : 'row'}
`
export const ControlsTitle = styled.h3`
    font-size: ${props => props.theme.font.size.fs18}
`;