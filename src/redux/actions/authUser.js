import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "../ActionType";
import axios from "axios";
import setAuthToken from "../../components/utils/setAuthToken";
//load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}/users/LoadUser`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const registerUsers = (user) => {
  console.log(user);
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
  //   console.log(user);
};

// export const register =
//   ({ name, email, sponsorName, leadersname, password }) =>
//   async (dispatch) => {
//     //config
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const body = { name, email, sponsorName, leadersname, password };
//     console.log(body, "here");

//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_URL}/users/CreateAccount`,
//         body,
//         config
//       );
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data,
//       });
//       dispatch(loadUser());
//     } catch (err) {
//       const errors = err.response.data.errors;
//       if (errors) {
//         // errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
//         console.log(errors);
//       }
//       dispatch({
//         type: REGISTER_FAILED,
//       });
//     }
//   };
//Login User

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    //config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { email, password };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/users/login`,
        body,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        // errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
