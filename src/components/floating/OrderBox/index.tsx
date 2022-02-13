import { useState } from "react";
import { Box, Card, Container, Checkbox } from "@mui/material";
import { MainBox, TopLineBox, InlineTypo, BoldTypo } from "./style";
import { orderList } from "./data";

const OrderBox = () => {
  const [act, setAct] = useState(1);
  return (
    <Box>
      <Container sx={{ mt: 5 }}>
        <Card sx={{ width: 250 }}>
          <MainBox>
            <Box sx={{ paddingBottom: 1 }}>
              <BoldTypo variant="body1">정렬하기</BoldTypo>
            </Box>
            {orderList?.map((obj, i) => {
              return (
                <TopLineBox key={obj.idx}>
                  <Checkbox
                    checked={obj.idx === act}
                    onClick={() => {
                      setAct(obj.idx);
                    }}
                  />
                  <InlineTypo variant="body1">{obj.contents}</InlineTypo>
                </TopLineBox>
              );
            })}

          </MainBox>
        </Card>
      </Container>
    </Box>
  );
};

export default OrderBox;
