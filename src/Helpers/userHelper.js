import axios from "axios";
import setAuthToken from "../components/utils/setAuthToken";
import { loadUser } from "../redux/actions/userAction";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const _registerUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/users/CreateAccount`,
      data,
      config
    );
    loadUser();
    return res.data;
  } catch (err) {
    console.log(err.response.data.message, "hhhhe");
    return err.response.data.message;
  }
};

const _loadeCurrentlyLogedInUser = async () => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}/users/LoadUser`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export { _registerUser, _loadeCurrentlyLogedInUser };
