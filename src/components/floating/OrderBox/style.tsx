import { 
  Box,styled,CardContent,Typography,
} from "@mui/material";

export const MainBox = styled(CardContent)(({ theme }) => ({
  padding : "10px",
  "&:last-child": {
    paddingBottom: 0
  }
})); 

export const TopLineBox = styled(Box)(({ theme }) => ({
  borderTop : "solid 1px silver",
})); 

export const InlineTypo = styled(Typography)(({ theme }) => ({
  display : "inline-block",
}));

export const BoldTypo = styled(Typography)(({ theme }) => ({
  fontWeight : 600,
}));