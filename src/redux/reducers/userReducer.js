import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  IS_LOADING,
  LOAD_USER,
} from "../ActionType";

const initialState = {
  // token: localStorage.getItem("token"),
  isAuthenticated: null,
  Loading: false,
  user: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        Loading: false,
      };
    case LOAD_USER:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
      };

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

    case IS_LOADING:
      return {
        ...state,
        Loading: true,
      };
    default:
      return state;
  }
}
