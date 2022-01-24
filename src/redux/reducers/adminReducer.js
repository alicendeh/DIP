import {
  ADMIN_GETS_ALL_USERS_REQUEST,
  ADMIN_GETS_ALL_USERS,
  ADMIN_GETS__ALL_STATISTICS_DATA,
  IS_LOADING,
  SET_ERROR,
  CURRENT_BOOK,
  ALL_BOOKS,
} from "../ActionType";

const INITIAL_STATE = {
  incomingUsersRequest: [],
  statisticsData: [],
  users: [],
  loading: false,
  error: null,
  newBook: [],
  allBooks: [],
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
    case CURRENT_BOOK:
      return {
        ...state,
        loading: false,
        newBook: payload,
      };
    case ALL_BOOKS:
      console.log(payload, "here");
      return {
        ...state,
        loading: false,
        allBooks: payload.books,
      };

    default:
      return state;
  }
};

export default getUsersRequest;
