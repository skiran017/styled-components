import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  // p is the prop of button
  font-weight: bold;
  ${(p) =>
    p.large
      ? css`
          //css helper is used to add huge css code
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}

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
