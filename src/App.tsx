import React, { useEffect } from 'react';
import styled from 'styled-components';
import Content from './components/Content';
import Button from './components/Content/Button/Buttonl';
import Header from './components/Header';

const App = () => {

  return (
    <AppBlock>
      <Header/>
      <Content/>
      <Button onClick={()=>{alert("click!!");}}>
        Download 🚀
      </Button>
      <Button onClick={()=>{alert("click!!Random");}}>
        Randomize ✨
      </Button>
      <Button onClick={()=>{alert("click!!Upload");}}>
        Upload
      </Button>
    </AppBlock>
 );
};
export default App;

const AppBlock = styled.div`
 width: 100%;
 height: 100%;
`;