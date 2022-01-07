import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import React from "react";

type Variant = "body" | "h1";

interface TypoProps extends React.HTMLAttributes<HTMLElement> {
  variant: Variant;
  children: React.ReactNode;
}

const StyledText = styled("span", { shouldForwardProp: (prop) => isPropValid(prop) })<TypoProps>(
  ({ theme, variant }) => ({
    fontSize: theme.typo[variant].fontSize,
  }),
);

const Typo = ({ variant = "body", children }: TypoProps) => {
  return <StyledText variant={variant}>{children}</StyledText>;
};

export default Typo;
