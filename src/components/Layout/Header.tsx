import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <AppBar elevation={0} sx={{ background: (theme) => theme.palette.background.default }}>
      <Toolbar>
        <Container>
          <Link passHref href="/auth/login">
            <Button color="secondary">로그인 하러가기</Button>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
