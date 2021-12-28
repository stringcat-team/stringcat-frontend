import styled, { CSSObject } from "@emotion/styled";
import React, { ReactNode } from "react";

type Display = "flex" | "block" | "inline-block" | "inline";

type AlignItems =
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "self-start"
  | "self-end"
  | "stretch"
  | "baseline"
  | "normal";

type JustifyContent =
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-even"
  | "stretch"
  | "baseline";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface BoxProps {
  children?: ReactNode;
  display?: Display;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  sx?: CSSObject;
}

const StyledDiv = styled("div")<BoxProps>(
  ({ display, alignItems, justifyContent, flexDirection, sx }) => ({
    display,
    alignItems,
    justifyContent,
    flexDirection,
    ...sx,
  }),
);

const Box = ({ children, display, alignItems, justifyContent, flexDirection, sx }: BoxProps) => {
  return (
    <StyledDiv
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      sx={sx}
    >
      {children}
    </StyledDiv>
  );
};

Box.defaultProps = {
  display: "block",
  alignItems: null,
  justifyContent: null,
  flexDirection: null,
  sx: {},
  children: null,
};

export default Box;
