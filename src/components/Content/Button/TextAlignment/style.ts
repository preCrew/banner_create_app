import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    width:100%;
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

    &.current{
        background: #000;
        color:#fff;
    }    
`