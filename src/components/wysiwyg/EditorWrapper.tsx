import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export interface EditorWrapperProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
  children?: React.ReactNode;
}

const EditorWrapper: React.FunctionComponent = (props: EditorWrapperProps) => {
  const { forwardedRef } = props;
  return (
    <Editor
      {...props}
      ref={forwardedRef}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
};
export default EditorWrapper;

EditorWrapper.defaultProps = {
  forwardedRef: null,
};
