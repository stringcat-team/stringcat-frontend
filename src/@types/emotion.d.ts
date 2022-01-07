import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
    };
    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
    shape: {
      borderRadius: number;
    };
    typo: {
      h1: Typo;
      body: Typo;
    };
  }
}

type TypoObject = {
  fontSize: string;
  fontWeight: number;
};

export type TypoVariant = "body" | "h1";
