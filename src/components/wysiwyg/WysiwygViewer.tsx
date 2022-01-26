import React, { forwardRef, useEffect, useRef } from "react";
import { useTheme } from "@mui/material";
import { Viewer as ViewerType, ViewerProps } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { ViewerWrapperProps } from "./ViewerWrapper";

const Viewer = dynamic<ViewerWrapperProps>(() => import("./ViewerWrapper"), { ssr: false });
const ViewerWidthForwaredRef = forwardRef<ViewerType | undefined, ViewerProps>((props, ref) => {
  return <Viewer {...props} forwardedRef={ref as React.MutableRefObject<ViewerType>} />;
});

const WysiwygViewer = () => {
  const viewerRef = useRef<ViewerType>();
  const theme = useTheme();

  return <ViewerWidthForwaredRef ref={viewerRef} theme={theme.palette.mode} />;
};

export default WysiwygViewer;
