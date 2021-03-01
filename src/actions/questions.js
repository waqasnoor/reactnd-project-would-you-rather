import { getQuestions, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { getUsers } from "./users";
export const RECEIVE_QUESTION = "RECIEVE_QUESTION";

const recieveQuestionCreator = (questions) => (dispatch) =>
  dispatch({ type: RECEIVE_QUESTION, questions });

export function fetchQuestions() {
  return async (dispatch) => {
    const questions = await getQuestions();
    return dispatch(recieveQuestionCreator(questions));
  };
}
export function attemptAnswer(info) {
  return async (dispatch, getState) => {
    const authedUser = getState().authUser.username;
    await saveQuestionAnswer({ authedUser, ...info });

    await Promise.all([dispatch(getUsers()), dispatch(fetchQuestions())]);
  };
}

export function newQuestion(question) {
  return async (dispatch, getState) => {
    try {
      const { username: author } = getState().authUser;
      await saveQuestion({ author, ...question });

      await Promise.all([dispatch(getUsers()), dispatch(fetchQuestions())]);
    } catch (error) {}
  };
}
