import React from 'react';
import styled from 'styled-components';
import { Title } from './components/Title/Title';
import { GlobalStyles } from './styles/GlobalStyles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>Hello World</Title>
      </Container>
    </>
  );
};

export default App;