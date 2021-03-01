import { AUTH_SUCCESS, LOGOUT_SUCCESS } from "../actions/auth";

export default function authUser(state = {}, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, username: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, username: "" };

    default:
      return state;
  }
}
