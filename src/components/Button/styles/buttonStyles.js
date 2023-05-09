import { css } from "@emotion/react";
import styled from "@emotion/styled";

const getButtonVariants = ({ variant = "default" }) => {
  const mapper = {
    default: css`
      background-color: lavender;
    `,
    cta: css`
      background-color: blueviolet;
    `,
    alternate: css`
      background-color: turquoise;
    `,
  };
  return mapper[variant];
};

export const ButtonStyled = styled.button`
  border: none;
  outline: none;

  padding: 10px 20px;
  border-radius: 5px;

  ${getButtonVariants}
`;
