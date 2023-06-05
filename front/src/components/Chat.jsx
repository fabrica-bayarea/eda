import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { Input, MainButton } from './styled';

const StyledContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  height: 600px;
  padding: 20px;
  width: 400px;

  & > form {
    display: flex;
    gap: 10px;
    margin-top: 10px;

    & > input {
      width: 100%;
    }
  }
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  overflow-y: scroll;
  padding: 20px;

  & > span {
    background-color: rgb(240 240 240);
    border-radius: 5px;
    margin: 4px 0;
    padding: 4px 10px;
    width: fit-content;

    &.user-message {
      align-self: flex-end;
      background-color: rgb(240 240 255);
    }
  }
`;

function Chat() {
  const inputRef = useRef();
  const [history, setHistory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHistory(history.concat(inputRef.current.value));
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <StyledContainer>
      <Messages>
        <span>Olá! 👋</span>
        <span>Como posso lhe ajudar hoje?</span>
        {history.map((text, index) => (
          <span className='user-message' key={index}>
            {text}
          </span>
        ))}
      </Messages>
      <form onSubmit={handleSubmit}>
        <Input type='text' ref={inputRef} placeholder='Digite uma mensagem...' />
        <MainButton type='submit'>Enviar</MainButton>
      </form>
    </StyledContainer>
  );
}

export default Chat;
