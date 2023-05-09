import React from "react";
import { ButtonStyled } from "./styles/buttonStyles";

export const Button = ({ children, variant }) => {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
};
