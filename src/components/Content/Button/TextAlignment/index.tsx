import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeTextAlignment, TOptionState } from '../../../../store/optionSlice';
import { Flex, Tabs, Rows, Tab } from './style';

interface TextAlignmentProps {
    options: TOptionState
}

const textAlignMentData = [
    ['┏','┳','┓'],
    ['┣','╋','┫'],
    ['┗','┻','┛']
]

const TextAlignment = ({options}:TextAlignmentProps) => {
    const dispatch = useDispatch()
    const [currentEl,setCurremtEl] = useState(5)
    let currentIndex 
    let num: number = 0;

    const onClickTab = (e: React.MouseEvent<HTMLDivElement>) => {
        currentIndex = ((e.target as HTMLDivElement).dataset.index) as unknown as number  * 1
        setCurremtEl(currentIndex)
        console.log(currentIndex)
        if(currentIndex === 1){
            dispatch(changeTextAlignment({horizontal:'flex-start',vetival:'flex-start'}));
            //(e.target as HTMLDivElement).className += activeClass
        }
        if(currentIndex === 2){
            dispatch(changeTextAlignment({horizontal:'center',vetival:'flex-start'}));
            //(e.target as HTMLDivElement).className += activeClass
        }
        if(currentIndex === 3){
            dispatch(changeTextAlignment({horizontal:'flex-end',vetival:'flex-start'}));
            //(e.target as HTMLDivElement).className += activeClass
        }
        if(currentIndex === 4){
            dispatch(changeTextAlignment({horizontal:'flex-start',vetival:'center'}));
            //(e.target as HTMLDivElement).className += activeClass
        }
        if(currentIndex === 5){
            dispatch(changeTextAlignment({horizontal:'center',vetival:'center'}));
            //(e.target as HTMLDivElement).className += activeClass
        }
        if(currentIndex === 6){
            dispatch(changeTextAlignment({horizontal:'flex-end',vetival:'center'}));
            //(e.target as HTMLDivElement).className += activeClass
        }
        if(currentIndex === 7){
            dispatch(changeTextAlignment({horizontal:'flex-start',vetival:'flex-end'}));
            //(e.target as HTMLDivElement).className += activeClass
        }         
        if(currentIndex === 8){
            dispatch(changeTextAlignment({horizontal:'center',vetival:'flex-end'}));
            //(e.target as HTMLDivElement).className += activeClass
        }     
        if(currentIndex === 9){
            dispatch(changeTextAlignment({horizontal:'flex-end',vetival:'flex-end'}));
            //(e.target as HTMLDivElement).className += activeClass
        }                                     
    }


    return (
        <Flex>
            <Tabs >
                {textAlignMentData.map((rows,rowsIndex) => 
                    <Rows key={rowsIndex}>
                        {rows.map((tab,tabIndex) =>{
                                ++num
                                return <Tab key={tabIndex} onClick={onClickTab} data-index={num} className={(currentEl === num ? 'current' : '') as string}>{tab[0]}</Tab>
                            })
                        }
                    </Rows>
                )}
            </Tabs>
        </Flex>
    );
}

export default TextAlignment