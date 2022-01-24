import { InputBase, InputBaseProps, styled } from "@mui/material";
import React from "react";

const StyledInput = styled(InputBase)(({ theme, disabled }) => ({
  border: `1px solid ${theme.palette.divider}`,
  height: 44,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  ...(disabled && {
    background: theme.palette.action.disabledBackground,
    color: theme.palette.text.primary,
    fontWeight: "bold",
  }),
}));

const Input = (props: InputBaseProps) => {
  return <StyledInput {...props} />;
};

export default Input;
