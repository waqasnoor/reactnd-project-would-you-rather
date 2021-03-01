import { RECEIVE_USERS } from "../actions/users";
export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.payload;
    default:
      return state;
  }
}
