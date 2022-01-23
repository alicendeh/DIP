import {
  ADMIN_GETS_ALL_USERS_REQUEST,
  ADMIN_GETS_STATISTICS_DATA,
  ADMIN_GETS_ALL_USERS,
} from "../ActionType";

const INITIAL_STATE = {
  incomingUsersRequest: [],
  statisticsData: [],
  users: [],
};

const getUsersRequest = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADMIN_GETS_ALL_USERS_REQUEST:
      return {
        ...state,
        incomingUsersRequest: payload,
      };
    case ADMIN_GETS_STATISTICS_DATA:
      return {
        ...state,
        statisticsData: payload,
      };
    case ADMIN_GETS_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export default getUsersRequest;
