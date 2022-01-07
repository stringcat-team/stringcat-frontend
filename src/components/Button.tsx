import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import React, { CSSProperties } from "react";
import { ButtonVariant } from "../@types/emotion";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  children?: React.ReactNode;
  variant?: ButtonVariant;
}

const StyledButton = styled("button", {
  shouldForwardProp: (prop) => isPropValid(prop),
})<ButtonProps>(({ sx, theme, variant }) => ({
  background: theme.colors.primary.color,
  color: theme.colors.primary.contrastText,
  outline: "none",
  border: "none",
  borderRadius: 18,
  padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  transition: "0.2s linear",
  cursor: "pointer",
  boxShadow: theme.shadows[1],
  minWidth: 80,
  "&:hover": {
    background: theme.colors.disabled.color,
    color: theme.colors.primary.color,
  },
  ...(variant === "disabled" && {
    background: theme.colors.disabled.color,
    color: theme.colors.text.primary,
    "&:hover": {
      background: theme.colors.primary.color,
    },
  }),
  ...sx,
}));

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, children, sx, ...restProps }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledButton variant={variant} ref={ref} sx={sx} {...restProps}>
        {children}
      </StyledButton>
    );
  },
);

Button.defaultProps = {
  sx: {},
  children: null,
  variant: "primary",
};

export default Button;
