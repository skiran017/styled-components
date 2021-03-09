import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PasswordInputStyled = styled(Input).attrs(() => ({
  placeholder: "Password ",
  type: "password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export function PasswordInput(props) {
  const [showPassword, setShowPasword] = useState(false);

  return <PasswordInputStyled {...props} />;
}
