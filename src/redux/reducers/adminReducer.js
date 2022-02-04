import {
  ADMIN_GETS_ALL_USERS_REQUEST,
  ADMIN_GETS_ALL_USERS,
  ADMIN_GETS__ALL_STATISTICS_DATA,
  IS_LOADING,
  SET_ERROR,
  CURRENT_BOOK,
  ALL_BOOKS,
  UPLOAD_SPINNER,
  FILTRATION_RESULT,
  FILTERED_BOOKS,
  LOGOUT,
  ALL_FREE_BOOKS,
  FILTERED_FREE_BOOKS,
} from "../ActionType";

const INITIAL_STATE = {
  incomingUsersRequest: [],
  statisticsData: [],
  users: [],
  loading: false,
  error: null,
  newBook: [],
  allBooks: [],
  allFreeBooks: [],
  bookSPinner: false,
  usersFilteredList: [],
  booksFilteredList: [],
  freeBooksFilteredList: [],
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
        bookSPinner: false,
        newBook: payload,
      };
    case ALL_BOOKS:
      return {
        ...state,
        loading: false,
        allBooks: payload.books,
      };
    case ALL_FREE_BOOKS:
      return {
        ...state,
        loading: false,
        allFreeBooks: payload.books,
      };
    case UPLOAD_SPINNER:
      return {
        ...state,
        bookSPinner: payload,
        error: null,
      };

    case FILTRATION_RESULT:
      return {
        ...state,
        usersFilteredList: payload,
      };
    case FILTERED_BOOKS:
      return {
        ...state,
        booksFilteredList: payload,
      };
    case FILTERED_FREE_BOOKS:
      return {
        ...state,
        freeBooksFilteredList: payload,
      };
    case LOGOUT:
      window.location.replace("/");
      localStorage.removeItem("token");
    default:
      return state;
  }
};

export default getUsersRequest;
