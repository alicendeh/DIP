import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const _registerUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/users/CreateAccount`,
      data,
      config
    );

    return res.data;
  } catch (err) {
    console.log(err.response.data.message, "hhhhe");
    return err.response.data.message;
  }
};
