import { Box, styled, Card, Typography, Avatar } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const QuestionCard = styled(Card)(({ theme }) => ({
  width: 560,
  overflowY: "hidden",
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

const ProfileBox = styled(Box)(({ theme }) => ({
  textAlign: "left",
  position: "relative",
}));

const ProfileTextBox = styled(Box)(({ theme }) => ({
  display: "inline-block",
  marginLeft: 10,
  lineHeight: 5,
  position: "absolute",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  maxHeight: 530,
  minHeight: 130,
  textAlign: "left"
}));

const ProfileImg = styled(Avatar)(({ theme }) => ({
  display: "inline-block",
}));

const ProfileText = styled(Typography)(({ theme }) => ({
  fontSize: 13.5,
}));

const NumberText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  display: "inline",
  marginRight: 12,
  marginLeft:  6,
  verticalAlign: "top",
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "left",
  margin: "10px 0"
}));

const LangTagBox = styled(Box)(({ theme }) => ({
  "&::after": {
    content: '""',
    display: "block",
    clear: "both",
  },
}));

const SubIconBox = styled(Box)(({ theme }) => ({
  padding: "5px 8px",
  borderRadius: 18,
  float: "left",
  backgroundColor:  theme.palette.secondary.main,
  position: "relative",
}));

const IconImage = styled(Image)(({ theme }) => ({
  marginTop: 10
}));

const LangTag = styled(Box)(({ theme }) => ({
  padding: "4px 8px",
  position: "relative",
  backgroundColor: "#FFEDC2",
  color: "black",
  borderRadius: 6,
  fontSize: 13,
  marginRight: 6,
  marginBottom: 5,
  cursor: "pointer",
  height: 30,
  float: "left",
}));

// @@@ 추후 any TYPE 수정
const Question = (props :any) => {
  const { data } = props;

  return (
    <Box>
      <QuestionCard>
        <ProfileBox>
          <ProfileImg alt="Remy Sharp" src={data.img} />
          <ProfileTextBox >
            <ProfileText>{data.name}</ProfileText>
            <ProfileText>{data.point} P</ProfileText>
          </ProfileTextBox>
        </ProfileBox>
        <TitleText>{data.title}</TitleText>
        <LangTagBox>
          {data?.leng?.map((obj :any) => {
              return (
                <LangTag key={obj.idx}>{obj.name}</LangTag>
              );
          })}
        </LangTagBox>
        <ContentBox 
          // onClick={}
          dangerouslySetInnerHTML={{__html: data.contant}}
        />
        <Box sx={{mt:2}}>
          <SubIconBox sx={{mr:2}}>
            <Image src="/images/thumb-up.png" width={15} height={14}/>
            <NumberText>{data.up}</NumberText>
            <Image src="/images/thumb-down.png" width={15} height={14}/>
            <NumberText>{data.down}</NumberText>
          </SubIconBox>
          <SubIconBox>
            <IconImage src="/images/comment.png" width={16} height={16}/>
            <NumberText>{data.reply}</NumberText>
          </SubIconBox>
        </Box>
      </QuestionCard>
    </Box>
  );
};

export default Question;
