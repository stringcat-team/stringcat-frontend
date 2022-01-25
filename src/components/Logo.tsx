import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

interface LogoProps {
  email?: boolean;
}

const Logo = ({ email }: LogoProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
        ...(email && {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: theme.spacing(3),
        }),
      }}
    >
      <Image src="/images/logo.png" height={40} width={240} />
    </Box>
  );
};

Logo.defaultProps = {
  email: false,
};

export default Logo;
