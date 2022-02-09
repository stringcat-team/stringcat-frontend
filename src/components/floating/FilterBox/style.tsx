import { 
  Box,styled,CardContent,Typography,Card,InputBase
} from "@mui/material";

export const MainBox = styled(CardContent)(({ theme }) => ({
  padding : "10px",
  border : "solid 1px #C1C1C1",
  width : 300,
  borderRadius : 5,
  "&::after" : {
    content: '""',
    display: "block",
    clear: "both",
  },
  "&:last-child" : {
    paddingBottom : 10
  },
  "&:hover" : {
    border : "solid 1px #F5BF41"
  },
})); 

export const FilterBar = styled(Box)(({ theme }) => ({
  padding : "3px 0",
  paddingBottom: 11,
  cursor : "pointer",
})); 

export const BoldTypo = styled(Typography)(({ theme }) => ({
  fontWeight : 500,
  float : "left",
}));

export const ArrowBox = styled(Card)(({ theme }) => ({
  width : "25px",
  height : "25px",
  float : "right",
  backgroundRepeat : "no-repeat",
  backgroundSize : "cover",
}));

export const SearchBox = styled(Card)(({ theme }) => ({
  width : 300,
  height : 215,
  borderRadius : 5,
  marginTop : 10,
  boxShadow : "0px 3px 8px rgba(0, 0, 0, 0.25)",
  padding : 10
}));

export const SearchBar = styled(InputBase)(({ theme }) => ({
  width : 250,
  height : 30,
  borderRadius : 5,
  padding : 3,
  border : "1px solid #3F3F3F",
  marginRight : 5,
}));

export const ResultBox = styled(Box)(({ theme }) => ({
  width : 280,
  height : 165,
  padding : 5,
  marginRight : 5,
  overflowY : "auto",
}));

export const ResultTypo = styled(Typography)(({ theme }) => ({
  color : "#a1a1a1",
  marginBottom : 6,
  cursor : "pointer",
  "&:hover" : {
    color : "#3F3F3F",
  },
}));

export const PickBox = styled(Box)(({ theme }) => ({
  width : 280,
  marginTop : 10,
}));

export const PickTag = styled(Box)(({ theme }) => ({
  padding : "4px 8px",
  display : "inline-block",
  backgroundColor : "#F5BF41",
  color : "black",
  borderRadius : 6,
  fontSize : 14,
  marginRight : 6,
  marginBottom : 5,
  cursor : "pointer",
  fontWeight : 500
}));

export const RemoveBox = styled(Box)(({ theme }) => ({
  display : "inline-block",
  color : "#F5BF41",
  fontSize : 14,
  fontWeight : 500
}));

