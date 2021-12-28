import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import React, { CSSProperties } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  children?: React.ReactNode;
}

const StyledButton = styled("button", {
  shouldForwardProp: (prop) => isPropValid(prop),
})<ButtonProps>(({ sx, theme }) => ({ ...sx, background: theme.colors.primary }));

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, sx, ...restProps }: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const test = {};

    return (
      <StyledButton ref={ref} sx={sx} {...restProps}>
        {children}
      </StyledButton>
    );
  },
);

export default Button;
