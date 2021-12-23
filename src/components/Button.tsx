import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import React, { CSSProperties } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  children?: React.ReactNode;
  // restProps: object;
}

const StyledButton = styled("button", {
  shouldForwardProp: (prop) => isPropValid(prop),
})<ButtonProps>(({ sx }) => ({ ...sx }));

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, sx, ...restProps }, ref) => {
    return (
      <StyledButton ref={ref} sx={sx} {...restProps}>
        {children}
      </StyledButton>
    );
  },
);

export default Button;
