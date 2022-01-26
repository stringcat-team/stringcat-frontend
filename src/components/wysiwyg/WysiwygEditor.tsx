import { useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import React, { forwardRef, useCallback, useRef } from "react";
import { EditorProps, Editor as EditorType } from "@toast-ui/react-editor";
import { EditorWrapperProps } from "./EditorWrapper";

const Editor = dynamic<EditorWrapperProps>(() => import("./EditorWrapper"), { ssr: false });

const EditorWithForwardedRef = forwardRef<EditorType | undefined, EditorProps>((props, ref) => {
  return <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />;
});

interface WysiwygEditorProps extends EditorProps {
  onChange(value: string): void;
}

const WysiwygEditor = (props: WysiwygEditorProps) => {
  const { onChange } = props;
  const theme = useTheme();
  const editorRef = useRef<EditorType>();
  const handleChange = useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
    onChange(instance.getMarkdown());
  }, [onChange]);

  return (
    <EditorWithForwardedRef
      {...props}
      useCommandShortcut
      ref={editorRef}
      theme={theme.palette.mode}
      onChange={handleChange}
    />
  );
};

export default WysiwygEditor;
