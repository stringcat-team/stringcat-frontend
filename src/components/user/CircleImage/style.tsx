import { styled, Box } from "@mui/material";

// eslint-disable-next-line import/prefer-default-export
export const MainBox = styled(Box)(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: 30,
  display: "inline-block",
  // backgroundImage : "url()"
  // backgroundRepeat : "no-repeat",
  // backgroundSize : "cover",
  border: "solid 1px silver",
}));
