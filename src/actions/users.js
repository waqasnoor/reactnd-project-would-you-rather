import * as api from "../utils/api";
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return { type: RECEIVE_USERS, payload: users };
}
export function getUsers() {
  return async (dispatch) => {
    const users = await api.getUsers();
    dispatch(receiveUsers(users));
  };
}
