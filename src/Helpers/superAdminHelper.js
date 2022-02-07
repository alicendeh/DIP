import axios from "axios";

import setAuthToken from "../components/utils/setAuthToken";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const _getAllUsers = async () => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/GetAllUsers`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _getAllAdmins = async () => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_URL}/superAdmin/getAllAdmin`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _getAllStatistics = async () => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_URL}/allUsers/statistics`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _addABook = async (data) => {
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_URL}/admin/books/CreateBook`,
      data
    );

    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _viewAllBooks = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/admin/books/GetAllBook`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _deleteBook = async (bookID) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_URL}/admin/books/delete/${bookID}`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

const _getFreeBooks = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/admin/books/GetAllFreeBooks`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};
const _updateAdminInfo = async (data) => {
  try {
    let res = await axios.put(
      `${process.env.REACT_APP_URL}/users/UpdateProfile`,
      data,
      config
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return {
        errorMessage: err.response.data.msg,
        code: 400,
      };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
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
export {
  _getAllUsers,
  _getAllStatistics,
  _addABook,
  _viewAllBooks,
  _deleteBook,
  _getFreeBooks,
  _updateAdminInfo,
  _loadeCurrentlyLogedInUser,
  _getAllAdmins,
};
