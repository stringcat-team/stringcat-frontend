import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers, Reducer } from "redux";
import { RootStateInterface } from "../../@types/redux/rootState";
import ConfigReducer from "./config";

const rootReducer: Reducer<RootStateInterface, AnyAction> = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRAGTE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers<RootStateInterface>({ config: ConfigReducer });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;