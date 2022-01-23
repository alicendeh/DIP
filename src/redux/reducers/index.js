import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  admin: adminReducer,
  user: userReducer,
});

export default reducers;
