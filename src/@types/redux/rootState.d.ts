import { AuthState } from "./reducers/auth.interface";
import { ConfigState } from "./reducers/config.interfaces";
import { SnackbarState } from "./reducers/snackbar.interface";

export interface RootStateInterface {
  config: ConfigState;
  auth: AuthState;
  snackbar: SnackbarState;
}
