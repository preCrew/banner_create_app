import React from 'react';
import styled from 'styled-components';

const App = () => {

  return (
    <AppBlock>
      <TempHeader/>
      <Content>
        <TempBanner/>
        <TempControls/>
      </Content>
    </AppBlock>
  );
};

export default App;

const AppBlock = styled.div`
  width: 100%;
  height: 100%;
`;

// TODO: Header 컴포넌트로 교체
const TempHeader = styled.div`
  width:100%;
  padding: 16px;
  height: 80px;
  background: grey;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (max-width: 880px){
    flex-direction: column;
  }
`;

// TODO: Banner 컴포넌트로 교체
const TempBanner = styled.div`
  height: 30vw;
  margin: 16px;
  background: #187818;
  flex-grow: 1;
  position: sticky;
  top: 0;
`;

// TODO: Controls 컴포넌트로 교체
const TempControls = styled.div`
  min-width: 310px;
  height: 980px;
  margin: 16px;
  background: #182378;
`;