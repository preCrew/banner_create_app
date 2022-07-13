import React, { useEffect } from 'react';
import styled from 'styled-components';
import Content from './components/Content';
import ColorPicker from './components/Content/Controls/ColorPicker';
import Header from './components/Header';
import { useAppDispatch } from './store/hooks';
import { changeBackgroundColor } from './store/optionSlice';
import { getRandomColor } from './utils/colorUtil';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const color = getRandomColor();
    dispatch(changeBackgroundColor(color));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <AppBlock>
      <ColorPicker
        whosColorChange='backgroundColor'
        changeColorFunction={changeBackgroundColor}
      />
      <Header/>
      <Content/>
    </AppBlock>
  );
};

export default App;

const AppBlock = styled.div`
  width: 100%;
  height: 100%;
`;