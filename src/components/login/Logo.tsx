import { useTheme } from "@emotion/react";
import Image from "next/image";
import React from "react";
import Box from "../Box";

interface LogoProps {
  email: boolean;
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

export default Logo;
