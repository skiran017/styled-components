import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: #f80489;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  outline: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
