import { connect } from "react-redux";
import Questions from "../components/Questions";

function QuestionContainer({ questions, users, results }) {
  return <Questions questions={questions} users={users} results={results} />;
}
const mapStateToProps = ({ authUser, questions, users }) => {
  const answers = users[authUser.username].answers;
  const unAnswered = Object.keys(questions)
    .filter((qId) => !answers[qId])
    .map((qId) => questions[qId])
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  const results = Object.keys(questions)
    .filter((qId) => answers[qId])
    .map((qId) => questions[qId]);

  return { questions: unAnswered, users, results };
};
export default connect(mapStateToProps)(QuestionContainer);
