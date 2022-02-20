import {
  Box,
  Card,
  Container,
  Typography,
  styled,
  Avatar,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Question from "./questions/Question";
import FilterBox from "./floating/FilterBox";
import OrderBox from "./floating/OrderBox";
import RankingBox from "./floating/RankingBox";

import { USER_LIST, QUESTION_LIST } from "../utils/dummies";

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

const Home = () => {
  const [data, setData] = useState({...USER_LIST[0]});
  const [list, setList] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // @@@ 임시 딜레이 삽입(로딩 이미지 확인)
    // API 완료 후 로직(setTimeout 삭제 등..) 및 any type 변경
    setLoading(true);
    window.setTimeout(() => {
      const filterList = QUESTION_LIST.filter((obj) => obj.page === page);
      setList((l: any) => [...l, ...filterList]);
      setLoading(false);
    }, page === 1 ? 0 : 2200);
  }, [page])
  
  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
      const lastPage = QUESTION_LIST[QUESTION_LIST.length-1]?.page;
      if (scrollTop + clientHeight >= scrollHeight && !loading && lastPage > page) {
        setPage(prev => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [list, loading, page]);

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
              <ProfileImg alt="Remy Sharp" src={data?.imageUrl} />
              <ProfileTextBox >
                <ProfileText>{data?.nickname}</ProfileText>
              </ProfileTextBox>
            </ProfileBox>
            <InfoText>
              무엇이 궁금하신가요?
            </InfoText>
          </AskCard>
        </Link>
        {list?.map((obj :any, i :number) => (
          <Question key={obj.idx} data={obj} />
        ))}
      </QuestionsBox>
      {loading
      ? (<Box sx={{textAlign:"center"}}>
          <Image src="/images/loading.gif" height={120} width={120}/>
         </Box>)
      : (<Box sx={{height:100}}/>)
      }
    </HomeContainer>
  );
};

export default Home;
