import {
  ADMIN_GETS_ALL_USERS_REQUEST,
  ADMIN_GETS_STATISTICS_DATA,
  ADMIN_GETS_ALL_USERS,
} from "../ActionType";

const adminGetsUsersequest = (users) => {
  return {
    type: ADMIN_GETS_ALL_USERS_REQUEST,
    payload: users,
  };
};

const adminGetsStatisticsData = (data) => {
  return {
    type: ADMIN_GETS_STATISTICS_DATA,
    payload: data,
  };
};

const adminGetsAllUsers = (users) => {
  return {
    type: ADMIN_GETS_ALL_USERS,
    payload: users,
  };
};

export { adminGetsUsersequest, adminGetsStatisticsData, adminGetsAllUsers };
