import { ADMIN_GETS_ALL_USERS_REQUEST } from "../ActionType";

const INITIAL_STATE = {
  incomingUsersRequest: [],
};

const getUsersRequest = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADMIN_GETS_ALL_USERS_REQUEST:
      return {
        ...state,
        incomingUsersRequest: payload,
      };
    default:
      return state;
  }
};

export default getUsersRequest;
