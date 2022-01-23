import {
  ADMIN_GETS_ALL_USERS_REQUEST,
  ADMIN_GETS_STATISTICS_DATA,
} from "../ActionType";

const INITIAL_STATE = {
  incomingUsersRequest: [],
  statisticsData: [],
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
    default:
      return state;
  }
};

export default getUsersRequest;
