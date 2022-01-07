import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import React, { CSSProperties } from "react";
import { IconButtonVariant } from "../@types/emotion";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  children?: React.ReactNode;
  variant?: IconButtonVariant;
}

const StyledButton = styled("button", {
  shouldForwardProp: (prop) => isPropValid(prop),
})<ButtonProps>(({ sx, theme, variant }) => ({
  background: theme.colors.primary.color,
  outline: "none",
  border: "none",
  borderRadius: "100%",
  transition: "0.2s linear",
  cursor: "pointer",
  boxShadow: theme.shadows[1],
  width: 40,
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  ...(variant === "filled" && {
    background: theme.colors.background.default,
  }),
  ...sx,
}));

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

IconButton.defaultProps = {
  sx: {},
  children: null,
  variant: "primary",
};

export default IconButton;
