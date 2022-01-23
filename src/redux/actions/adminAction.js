import { ADMIN_GETS_ALL_USERS_REQUEST } from "../ActionType";

const adminGetsUsersequest = (users) => {
  return {
    type: ADMIN_GETS_ALL_USERS_REQUEST,
    payload: users,
  };
};

export { adminGetsUsersequest };
