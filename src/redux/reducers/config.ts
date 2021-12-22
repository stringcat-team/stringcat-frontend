import {
  ConfigState,
  ConfigActionTypes,
  ConfigActions,
} from './../../interfaces/redux/reducers/config.interfaces';

export const setTheme = (mode: string) => ({
  type: ConfigActionTypes.SET_THEME,
  payload: { mode },
});

const initialState: ConfigState = {
  mode: 'light',
};

const ConfigReducer = (state = initialState, action: ConfigActions): ConfigState => {
  switch (action.type) {
    case ConfigActionTypes.SET_THEME:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ConfigReducer;
