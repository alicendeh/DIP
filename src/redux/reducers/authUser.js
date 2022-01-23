import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../ActionType";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  Loading: true,
  user: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        Loading: false,
        user: payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        
      };
    //   localStorage.setItem("token", payload.token);
    //   return {
    //     ...state,
    //     ...payload,
    //     isAuthenticated: true,
    //     Loading: false,
    //   };
    case REGISTER_FAILED:
    case AUTH_ERROR:
    case LOGOUT:
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        Loading: false,
        user: null,
      };
    default:
      return state;
  }
}
