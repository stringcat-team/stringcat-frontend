import { AuthState } from "./reducers/auth.interface";
import { ConfigState } from "./reducers/config.interfaces";

export interface RootStateInterface {
  config: ConfigState;
  auth: AuthState;
}
