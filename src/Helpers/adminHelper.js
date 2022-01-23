import axios from "axios";

const _getPlanChangeRequests = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/AllRequest`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

const _getAllUsers = async () => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/GetAllUsers`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

const _getAllStatistics = async () => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/statistics`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export { _getPlanChangeRequests, _getAllUsers, _getAllStatistics };
