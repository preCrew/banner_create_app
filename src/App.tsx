import React, { useEffect } from 'react';
import styled from 'styled-components';
import Content from './components/Content';
import Header from './components/Header';
import { useAppDispatch } from './store/hooks';
import { changeBackgroundColor, changeBorderColor, changeForegroundColor } from './store/optionSlice';
import { getRandomColor } from './utils/colorUtil';

const App = () => {
  const dispatch = useAppDispatch();

  // 최초 실행 or 새로고침시 색상들 랜덤으로 초기화
  useEffect(()=>{
      dispatch(changeBackgroundColor(getRandomColor()));
      dispatch(changeForegroundColor(getRandomColor()));
      dispatch(changeBorderColor(getRandomColor()));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <AppBlock>
      <Header />
      <Content />
    </AppBlock>
  );
};
export default App;

const AppBlock = styled.div`
 width: 100%;
 height: 100%;
`;