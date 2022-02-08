import { ExpandMore, Search } from "@mui/icons-material";
import { InputBase, Box, styled, Button, Typography } from "@mui/material";
import React from "react";

const InputBox = styled(Box)(({ theme }) => ({
  flex: 1,
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  height: 32,
}));

const SearchBarInput = () => {
  return (
    <InputBox>
      <InputBase
        fullWidth
        placeholder="search"
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

export default SearchBarInput;
