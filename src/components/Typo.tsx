import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import React from "react";
import { TypoVariant } from "../@types/emotion";

interface TypoProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypoVariant;
  children: React.ReactNode;
}

const StyledText = styled("p", { shouldForwardProp: (prop) => isPropValid(prop) })<TypoProps>(
  ({ theme, variant }) => ({
    fontSize: variant && theme.typo[variant].fontSize,
    padding: 0,
    margin: 0,
  }),
);

const Typo = ({ variant, children }: TypoProps) => {
  return <StyledText variant={variant}>{children}</StyledText>;
};

Typo.defaultProps = {
  variant: "body",
};

export default Typo;
