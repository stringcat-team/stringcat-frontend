import { ExpandMore, Search } from "@mui/icons-material";
import { InputBase, Box, styled, Button, Typography, SxProps } from "@mui/material";
import React from "react";

const InputBox = styled(Box)<Partial<Props>>(({ theme, sx }) => ({
  flex: 1,
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  height: 32,
}));

interface Props {
  sx?: SxProps | null;
  placeholder?: string;
}

const SearchBarInput = ({ sx, placeholder }: Props) => {
  return (
    <InputBox sx={sx}>
      <InputBase
        fullWidth
        placeholder={placeholder}
        inputProps={{ sx: { fontSize: 13 } }}
        name="title"
      />
      <Button sx={{ display: "flex", p: 0, width: 85, mr: 1 }}>
        <Typography color="textPrimary" variant="body2">
          통합검색
        </Typography>
        <ExpandMore />
      </Button>
      <Button sx={{ p: 0, minWidth: "auto", color: (theme) => theme.palette.primary.contrastText }}>
        <Search />
      </Button>
    </InputBox>
  );
};

SearchBarInput.defaultProps = {
  sx: null,
  placeholder: "search",
};

export default SearchBarInput;
