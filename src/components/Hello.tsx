import { CSSObject, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ArrowBack } from "@mui/icons-material";
import React, { useRef } from "react";
import Box from "./Box";
import Button from "./Button";
import Icon from "./Icon";
import IconButton from "./IconButton";
import Typo from "./Typo";

const getBoxStyle = (): CSSObject => ({
  marginBottom: 16,
  "&>*": {
    marginRight: 8,
  },
});

const Hello = () => {
  const theme = useTheme();
  const testRef = useRef<HTMLButtonElement>(null);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log(e);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Box>
        <Box
          sx={{
            boxShadow: theme.shadows[2],
            borderRadius: theme.shape.borderRadius,
            padding: theme.spacing(2),
            marginBottom: theme.spacing(2),
          }}
        >
          <Typo variant="subtitle">subtitle : Hello it's String Cat!</Typo>
          <Typo variant="body">body : Hello it's String Cat!</Typo>
          <Typo variant="body2">body2 : Hello it's String Cat!</Typo>
          <Typo variant="caption">caption : Hello it's String Cat!</Typo>
        </Box>
        <Box sx={getBoxStyle()}>
          <Button ref={testRef} onClick={onClick} variant="disabled">
            테스트
          </Button>
          <Button ref={testRef} onClick={onClick}>
            테스트
          </Button>
        </Box>
        <Box display="flex" sx={getBoxStyle()}>
          <IconButton>
            <Icon type="search" />
          </IconButton>
          <IconButton variant="filled">
            <Icon type="search" />
          </IconButton>
          <IconButton variant="disabled">
            <Icon type="search" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Hello;
