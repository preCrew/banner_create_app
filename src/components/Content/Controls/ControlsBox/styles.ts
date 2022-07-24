import styled from "styled-components";

interface TControlsLayout {
    flexDirection?: 'column' | 'row';
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    justifyContent?: 'space-between' | 'space-around';
}

export const ControlsLayout = styled.div<TControlsLayout>`
    width: 100%;
    padding: 16px 0;
    
    display: flex;
    justify-content: ${({justifyContent}) => justifyContent || 'space-between'};
    align-items: ${({alignItems}) => alignItems || 'center'};
    flex-direction: ${({flexDirection}) => flexDirection || 'row'};
`
export const ControlsTitle = styled.h3`
    font-size: ${props => props.theme.font.size.fs18};
`;