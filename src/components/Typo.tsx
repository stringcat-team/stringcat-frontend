import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import { TypoVariant } from "../@types/emotion";

interface TypoProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypoVariant;
  children?: React.ReactNode;
  sx?: CSSProperties;
}

const StyledText = styled("p", { shouldForwardProp: (prop) => isPropValid(prop) })<TypoProps>(
  ({ theme, variant, sx }) => ({
    ...(variant && { ...theme.typo[variant] }),
    fontWeight: 500,
    padding: 0,
    margin: 0,
    ...sx,
  }),
);

const Typo = ({ variant, sx, children }: TypoProps) => {
  return (
    <StyledText variant={variant} sx={sx}>
      {children}
    </StyledText>
  );
};

Typo.defaultProps = {
  variant: "body",
  children: null,
  sx: null,
};

export default Typo;
