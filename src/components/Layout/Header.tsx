import { ArrowBack, Home, NotificationsActive, SupervisedUserCircle } from "@mui/icons-material";
import { AppBar, Box, Button, styled, TextField, Toolbar } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "../../redux/reducers/snackbar";
import { RootState } from "../../redux/reducers";
import { logout } from "../../redux/reducers/auth";
import SearchBar from "../questions/SearchBar";
import SnackBar from "../SnackBar";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "16px",
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "100px",
  paddingRight: "52px",
  margin: "0 auto",
  maxWidth: 1200,
  width: "100%",
}));

const Header = () => {
  const router = useRouter();
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onClickBack: MouseEventHandler = () => {
    router.back();
  };

  const onClickMessage = () => {
    dispatch(
      enqueueSnackbar({
        message: "스낵바 테스팅중입니다.",
        options: { variant: "info" },
      }),
    );
  };
  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar elevation={0} sx={{ background: (theme) => theme.palette.background.default }}>
      <Toolbar sx={{ minHeight: 50 }} disableGutters variant="dense">
        <Container>
          <StyledButton onClick={onClickBack}>
            <ArrowBack />
          </StyledButton>
          <Link passHref href="/">
            <StyledButton>
              <Home />
            </StyledButton>
          </Link>
          <Link passHref href="/ranking">
            <StyledButton>
              <SupervisedUserCircle />
            </StyledButton>
          </Link>
          <SearchBar />
          <StyledButton onClick={onClickMessage}>
            <NotificationsActive />
          </StyledButton>

          {!accessToken ? (
            <Link passHref href="/auth/login">
              <StyledButton>로그인</StyledButton>
            </Link>
          ) : (
            <>
              <Link passHref href="/mypage">
                <StyledButton>마이페이지</StyledButton>
              </Link>
              <StyledButton onClick={onClickLogout}>로그아웃</StyledButton>
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
