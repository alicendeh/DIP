import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import authUser from "./authUser";

const reducers = combineReducers({
  admin: adminReducer,
  user: authUser,
});

export default reducers;
