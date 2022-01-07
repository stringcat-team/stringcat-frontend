import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    mode: string;
    spacing: (number) => number;
    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
    colors: {
      primary: ColorObject;
      disabled: ColorObject;
      divider: string;
      text: {
        primary: string;
        secondary: string;
      };
    };
    background: {
      default: string;
    };
    shape: {
      borderRadius: number;
    };
    typo: {
      fontFamily: string;
      h1: TextObject;
      body: TextObject;
      body2: TextObject;
      caption: TextObject;
    };
    shadows: [String];
  }
}

type TextObject = {
  fontSize: string;
  fontFamily: string;
  fontWeight: number;
};

type ColorObject = {
  color: string;
  contrastText: string;
};

export type TypoVariant = "h1" | "body" | "body2" | "caption";
export type ButtonVariant = "primary" | "disabled";
