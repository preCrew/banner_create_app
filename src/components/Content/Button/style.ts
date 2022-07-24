import styled from "styled-components";

export const ButtonStyle = styled.div`
display: inline-flex;
margin: 4px 4px;
padding: 8px 16px;
border-radius: 4px;
background-color: #000;
color: #fff;
font-size: 18px;
cursor: pointer;
align-items: center;
justify-content: center;
flex-grow: 1;
`

const ButtonBlock = styled.div`
padding: 16px;
width: 32px;
height: 32px;
border: 3px solid rgba(0, 0, 0, 0.3);
border-radius: 50%;
cursor: pointer;
`

export const BgButton = styled(ButtonBlock)`
    background-color: #85e5ddff;
`

export const FgButton = styled(ButtonBlock)`
    background-color: #a1233bff;
`

export const BdButton = styled(ButtonBlock)`
    background-color: #d69eb3ff;
`
