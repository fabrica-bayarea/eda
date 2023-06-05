import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
`;

const MainButton = styled(Button)`
  background-color: #f7797d;
  color: white;
  height: 40px;
  padding: 0 10px;
`;

export { MainButton };
