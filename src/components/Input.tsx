/* eslint-disable react/jsx-no-duplicate-props */
import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

const Input = (props: TextFieldProps) => {
  const { value } = props;
  return (
    <TextField
      InputProps={{ sx: { background: value ? "#F1F1F1" : null } }}
      inputProps={{ sx: { px: 1, py: 0, height: 44 } }}
      FormHelperTextProps={{ sx: { ml: 0.2 } }}
      {...props}
    />
  );
};

export default Input;
