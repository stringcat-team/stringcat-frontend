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
      background: {
        default: string;
      };
    };
    shape: {
      borderRadius: number;
    };
    typo: {
      fontFamily: string;
      subtitle: TextObject;
      body: TextObject;
      body2: TextObject;
      caption: TextObject;
    };
    shadows: string[number];
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

export type TypoVariant = "subtitle" | "body" | "body2" | "caption";
export type ButtonVariant = "primary" | "disabled";
export type IconButtonVariant = "primary" | "disabled" | "filled";
