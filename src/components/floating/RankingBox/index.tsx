import {
  Box,Card,Container,
} from "@mui/material";
import CircleImage from "../../user/CircleImage";

import { temp1 } from "./data";
import { MainBox,TopLineBox,HoverBox,InlineTypo,SymmetryTypo,BoldTypo } from "./style";

const RankingBox = () => {
  return (
    <Box>
      <Container sx={{ mt: 5 }}>
        <Card sx={{ width: 250 }}>
          <MainBox> 
            <Box sx={{ paddingBottom: 1}}>
              <BoldTypo variant="body1">Top5 Ranking</BoldTypo>
            </Box>
            {
              temp1 && temp1.map((obj, i)=> {
                  return(
                    <TopLineBox key={obj.idx}>
                      <HoverBox>
                        <CircleImage/>
                        <InlineTypo variant="body1">{obj.name}</InlineTypo>
                        <SymmetryTypo variant="body1">{obj.point} P</SymmetryTypo>
                      </HoverBox>
                    </TopLineBox>
                  )
              })
            }
          </MainBox>
        </Card>
      </Container>
    </Box>
  );
};

export default RankingBox;
