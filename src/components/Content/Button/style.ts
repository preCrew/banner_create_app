import styled from "styled-components";

export const ButtonStyle = styled.div`
display: inline-flex;
margin: 4px 0;
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

export const Flex = styled.div`
display: flex;
padding: 16px 0;
align-items: center;
justify-content: space-between;
flex-grow: 1;
`

export const Tabs = styled.div`
display: flex;
flex-direction: column;
border-radius: 4px;
background-color: #eee;
flex-grow: 1;
`

export const Rows = styled.div`
display: flex;
`

export const Tab = styled.div`
display: inline-flex;
padding: 8px 16px;
border-radius: 4px;
cursor: pointer;
align-items: center;
justify-content: center;
flex-grow: 1;
`