import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["dip-token"] = token;
  } else {
    delete axios.defaults.headers.common["dip-token"];
  }
};
export default setAuthToken;
