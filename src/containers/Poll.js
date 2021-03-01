import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Poll from "../components/Poll";

import { attemptAnswer } from "../actions/questions";

function PollContainer({ questions, users, dispatch }) {
  const history = useHistory();
  const handleAnswer = async (answer) => {
    await dispatch(attemptAnswer(answer));
    history.push("/dashboard");
  };

  const { id } = useParams();
  const question = questions[id];
  const author = users[question.author];
  return (
    <Poll question={question} author={author} answerHandler={handleAnswer} />
  );
}
export default connect(({ questions, users }) => ({ questions, users }))(
  PollContainer
);
