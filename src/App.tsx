import React from 'react';
import styled from 'styled-components';
import Content from './components/Content';
import Header from './components/Header';

const App = () => {

  return (
    <AppBlock>
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