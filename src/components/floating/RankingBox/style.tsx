import { Box, styled, CardContent, Typography, Avatar } from "@mui/material";

export const MainBox = styled(CardContent)(({ theme }) => ({
  padding: "10px",
  "&:last-child": {
    paddingBottom: 0,
  },
}));

export const TopLineBox = styled(Box)(({ theme }) => ({
  borderTop: "solid 1px silver",
  position: "relative",
  padding : "5px 0",
  cursor: "pointer",
}));

export const HoverBox = styled(Box)(({ theme }) => ({
  transition: "ease all 0.2s",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: "#FFEDC2",
  },
}));

export const InlineTypo = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  position: "absolute",
  top: 12,
  marginLeft: 10,
}));

export const SymmetryTypo = styled(Typography)(({ theme }) => ({
  float: "right",
  lineHeight: "2.5",
}));

export const BoldTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

export const ProfileImg = styled(Avatar)(({ theme }) => ({
  display: "inline-block",
  width: 35,
  height: 35,
  marginTop: 2,
}));