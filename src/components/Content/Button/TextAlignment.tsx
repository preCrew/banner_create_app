import React, { useState } from 'react';
import { BgButton } from './style';
import styled, { css } from 'styled-components';


interface backGroundBt {

}

const Flex = styled.div`
display: flex;
padding: 16px 0;
align-items: center;
justify-content: space-between;
flex-grow: 1;
`

const Tabs = styled.div`
display: flex;
flex-direction: column;
border-radius: 4px;
background-color: #eee;
flex-grow: 1;
`

const Rows = styled.div`
display: flex;
`

const Tab = styled.div`
display: inline-flex;
padding: 8px 16px;
border-radius: 4px;
cursor: pointer;
align-items: center;
justify-content: center;
flex-grow: 1;
`


export default function backGroundBt() {

    return (
        <Flex>
            <Tabs>
                <Rows>
                    <Tab>┏</Tab>
                    <Tab>┳</Tab>
                    <Tab>┓</Tab>
                </Rows>
                <Rows>
                    <Tab>┣</Tab>
                    <Tab>╋</Tab>
                    <Tab>┫</Tab>
                </Rows>
                <Rows>
                    <Tab>┗</Tab>
                    <Tab>┻</Tab>
                    <Tab>┛</Tab>
                </Rows>
            </Tabs>
        </Flex>
    );
}
