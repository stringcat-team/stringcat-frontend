import Image from "next/image";
import React from "react";
import Box from "../Box";

const Logo = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Image src="/images/logo.png" height={40} width={240} />
    </Box>
  );
};

export default Logo;
