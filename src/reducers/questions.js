import { RECEIVE_QUESTION } from "../actions/questions";
export default function questionsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return action.questions;
    default:
      return state;
  }
}
