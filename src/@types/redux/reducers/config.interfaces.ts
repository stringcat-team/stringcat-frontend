export enum ConfigActionTypes {
  SET_THEME = 'SET_THEME',
}

export type ConfigActions = SetTheme;

export type ConfigState = {
  mode: string;
};

export interface SetTheme {
  type: ConfigActionTypes.SET_THEME;
  payload: { mode: string };
}
