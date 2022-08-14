import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const VARIANTS_STYLE = {
  FILLED: "filled",
  OUTLINED: "outlined",
  FILLED_WHITE: "filledWhite",
  OUTLINED_WHITE: "outlinedWhite",
  LINK: "link",
};

const SIZES = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
};

const FilledStyle = ({ theme }) =>
  css`
    padding: 20px 40px;
    background-color: ${theme.orange};
    border: 0;
    border-radius: 30px;
    color: ${theme.white};
    font-weight: 800;
  `;

const OutlinedStyle = css`
  padding: 20px 40px;
  background-color: none;
  border: 3px solid ${({ colors }) => colors.orange};
  border-radius: 30px;

  color: ${({ colors }) => colors.orange};
  font-weight: 800;
`;

const FiledWhiteStyle = css`
  padding: 20px 40px;
  background-color: ${({ colors }) => colors.beige};
  border: 0;
  border-radius: 30px;

  color: ${({ colors }) => colors.orange};
  font-weight: 800;
`;

const OutlinedWhiteStyle = css`
  background-color: ${({ colors }) => colors.beige};
  border: 3px solid ${({ colors }) => colors.orange};
  border-radius: 30px;

  color: ${({ colors }) => colors.orange};
  font-weight: 800;
`;

const LinkStyle = css`
  background-color: none;
  border: none;

  color: ${({ colors }) => colors.orange};
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
`;

const LinkSmallStyle = css`
  background-color: none;
  border: none;

  color: ${({ colors }) => colors.orange};
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
`;

const BigStyle = css`
  padding: 20px 40px;
  font-size: 16px;
  line-height: 20px;
`;

const MediumStyle = css`
  padding: 20px 32px;
  font-size: 16px;
  line-height: 20px;
`;

const SmallStyle = css`
  padding: 20px 24px;
  font-size: 14px;
  line-height: 18px;
`;

const StartIcon = styled.span`
  display: inline-flex;
  margin-right: 8px;
  margin-left: -12px;
  width: 16px;
  height: 10px;
`;

const EndIcon = styled.span`
  display: inline-flex;
  margin-left: 8px;
  margin-right: -12px;
  width: 16px;
  height: 10px;
`;

const StyledButton = styled("button")`
  ${FilledStyle}
`;

const Button = () => {
  return (
    <button {...props} className={""}>
      {children}
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
