import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import React, { CSSProperties } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  sx?: CSSProperties;
  children?: React.ReactNode;
  // restProps: object;
}

const StyledButton = styled("button", {
  shouldForwardProp: (prop) => isPropValid(prop),
})<ButtonProps>((props) => ({ ...props.sx }));

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, sx, ...restProps }, ref) => {
    console.log(restProps);
    return (
      <StyledButton ref={ref} {...restProps}>
        {children}
      </StyledButton>
    );
  },
);

export default Button;
