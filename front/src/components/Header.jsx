import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  height: 80px;
  padding-left: 20px;

  h1 {
    font-size: 1.5em;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2em;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Chatbot Administrativo</h1>
    </StyledHeader>
  );
}

export default Header;
