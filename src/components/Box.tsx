import styled, { CSSObject } from "@emotion/styled";
import React, { ReactNode } from "react";

type display = "flex" | "block" | "inline-block" | "inline";

type alignItems =
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

type justifyContent =
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

type flexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface BoxProps {
  children?: ReactNode;
  display?: display;
  alignItems?: alignItems;
  justifyContent?: justifyContent;
  flexDirection?: flexDirection;
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

const Box: React.FC<BoxProps> = ({
  children,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  sx,
}: BoxProps) => {
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

export default Box;
