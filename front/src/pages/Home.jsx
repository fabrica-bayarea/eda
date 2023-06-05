import React from 'react';
import styled from 'styled-components';

import { Chat, Header } from '../components';

const StyledSection = styled.section`
  align-items: center;
  background: linear-gradient(135deg, #c6ffdd, #fbd786, #f7797d);
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 80px);
`;

function App() {
  return (
    <main>
      <Header />
      <StyledSection>
        <Chat />
      </StyledSection>
    </main>
  );
}

export default App;
