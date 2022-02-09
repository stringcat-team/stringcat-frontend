import { Box, CSSObject, Icon as MuiIcon } from "@mui/material";
import React from "react";

interface IconProps {
  type: string;
  sx?: CSSObject;
}

const Icon = ({ type, sx }: IconProps) => {
  return (
    <MuiIcon className="notranslate" sx={sx}>
      {type}
    </MuiIcon>
  );
};

Icon.defaultProps = {
  sx: {},
};

export default Icon;
