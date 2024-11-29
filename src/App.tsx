import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { HistoricSection } from '@/components/HistoricSection/HistoricSection';
import { mockData } from '@/mock/data';

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--grey);
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <HistoricSection data={mockData} />
      </Container>
    </>
  );
};

export default App;
