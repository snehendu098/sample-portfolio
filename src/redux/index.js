import { combineReducers } from "redux";
import rootReducer from "./rootReducer";

const rootState = combineReducers({
  theme: rootReducer,
});

export default rootState;
