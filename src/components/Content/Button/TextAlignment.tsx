import { Flex, Tabs, Rows, Tab } from './style';

interface TextAlignmentBt {

}


export default function TextAlignmentBt() {

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
