import { Box, Card, Container } from "@mui/material";
import { Key, ReactChild, ReactFragment, ReactPortal, useState } from "react";
import { temp } from "./data";
import { MainBox, TopLineBox, HoverBox, InlineTypo, SymmetryTypo, BoldTypo, ProfileImg } from "./style";


const RankingBox = () => {
  const [tempList, setTempList] = useState([...temp]);

  return (
    <Box>
      <Container sx={{ mt: 2 }}>
        <Card sx={{ width: 250 }}>
          <MainBox>
            <Box sx={{ paddingBottom: 1 }}>
              <BoldTypo variant="body1">Top5 Ranking</BoldTypo>
            </Box>
            {tempList?.map((obj: { idx: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; point: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
              return (
                <TopLineBox key={obj.idx}>
                  <HoverBox>
                    <ProfileImg src="https://mui.com/static/images/avatar/1.jpg" />
                    <InlineTypo variant="body1">{obj.name}</InlineTypo>
                    <SymmetryTypo variant="body1">{obj.point} P</SymmetryTypo>
                  </HoverBox>
                </TopLineBox>
              );
            })}

          </MainBox>
        </Card>
      </Container>
    </Box>
  );
};

export default RankingBox;
