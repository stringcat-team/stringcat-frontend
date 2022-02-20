import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  styled,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Question from "./questions/Question";
import FilterBox from "./floating/FilterBox";
import OrderBox from "./floating/OrderBox";
import RankingBox from "./floating/RankingBox";

const HomeContainer = styled(Container)(({ theme }) => ({
  position: "relative",
}));

const RightBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  right:20,
  top:0,
}));

const LeftBox = styled(Box)(({ theme }) => ({
  position: "absolute",
}));

const QuestionsBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

const AskCard = styled(Card)(({ theme }) => ({
  width: 560,
  height: 120,
  marginBottom: 10 ,
  display: "inline-block",
  padding: 18,
  border: "1px solid rgba(0,0,0,0)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0px 4px 15px rgba(0,0,0,0.25)",
    border: `solid 1px ${theme.palette.primary.main}`,
  },
}));

const ProfileImg = styled(Avatar)(({ theme }) => ({
  display: "inline-block",
  width: 30,
  height: 30,
}));

const ProfileBox = styled(Box)(({ theme }) => ({
  textAlign: "left",
  position: "relative",
}));

const ProfileTextBox = styled(Box)(({ theme }) => ({
  display: "inline-block",
  marginLeft: 10,
  position: "absolute",
  top: 7
}));

const ProfileText = styled(Typography)(({ theme }) => ({
  lineHeight: 1,
  fontSize: 13.5,
}));

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  color: "#bbbbbb",
  textAlign: "left",
  marginTop: 11,
}));

const tempData = {
  "idx"     : 1,
  "img"     : "https://mui.com/static/images/avatar/1.jpg",
  "name"    : "조대희",
}

const Home = () => {
  const [data, setData] = useState({...tempData});

  return (
    <HomeContainer>
      <LeftBox>
        <FilterBox/> 
      </LeftBox>
      <RightBox>
        <OrderBox />
        <RankingBox />
      </RightBox> 
      <QuestionsBox >
        <Link passHref href="/ask">
          <AskCard>
            <ProfileBox>
              <ProfileImg alt="Remy Sharp" src={data.img} />
              <ProfileTextBox >
                <ProfileText>{data.name}</ProfileText>
              </ProfileTextBox>
            </ProfileBox>
            <InfoText>
              무엇이 궁금하신가요?
            </InfoText>
          </AskCard>
        </Link>
        <Question />
        <Question />
        <Question />
      </QuestionsBox>
    </HomeContainer>
  );
};

export default Home;
