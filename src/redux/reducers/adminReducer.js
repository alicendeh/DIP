import {
  ADMIN_GETS_ALL_USERS_REQUEST,
  ADMIN_GETS_ALL_USERS,
  ADMIN_GETS__ALL_STATISTICS_DATA,
  IS_LOADING,
  SET_ERROR,
} from "../ActionType";

const INITIAL_STATE = {
  incomingUsersRequest: [],
  statisticsData: [],
  users: [],
  loading: false,
  error: null,
};

const getUsersRequest = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADMIN_GETS_ALL_USERS_REQUEST:
      return {
        ...state,
        incomingUsersRequest: payload.user,
        loading: false,
        error: null,
      };

    case ADMIN_GETS_ALL_USERS:
      return {
        ...state,
        users: payload.allUsers,
        loading: false,
        error: null,
      };
    case ADMIN_GETS__ALL_STATISTICS_DATA:
      return {
        ...state,
        statisticsData: payload,
        loading: false,
        error: null,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }

    default:
      return state;
  }
};

export default getUsersRequest;
