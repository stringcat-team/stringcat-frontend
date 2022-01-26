import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import { Viewer, ViewerProps } from "@toast-ui/react-editor";

export interface ViewerWrapperProps extends ViewerProps {
  forwardedRef?: React.MutableRefObject<Viewer>;
  children?: React.ReactNode;
}
const ViewerWrapper: React.FunctionComponent = (props: ViewerWrapperProps) => {
  const { forwardedRef } = props;
  return (
    <Viewer
      {...props}
      ref={forwardedRef}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
};

ViewerWrapper.defaultProps = {
  forwardedRef: null,
};

export default ViewerWrapper;
