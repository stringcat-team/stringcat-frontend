import { Box, CSSObject, Icon as MuiIcon, styled } from "@mui/material";
import React from "react";

interface IconProps {
  type: string;
  fontSize?: string;
  sx?: CSSObject;
}

const StyledIcon = styled(MuiIcon)<{ iconSize?: string }>(({ theme, iconSize }) => ({
  color: "inherit",
  "&.material-icons": {
    fontSize: iconSize,
  },
}));

const Icon = ({ type, sx, fontSize }: IconProps) => {
  return (
    <StyledIcon className="notranslate" sx={sx} iconSize={fontSize}>
      {type}
    </StyledIcon>
  );
};

Icon.defaultProps = {
  sx: {},
  fontSize: undefined,
};

export default Icon;
