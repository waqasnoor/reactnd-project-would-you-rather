import { connect } from "react-redux";
import Leaderboard from "../components/Leaderboard";

function LeaderboardContainer({ scoreCard }) {
  return <Leaderboard scoreCard={scoreCard} />;
}
const mapStateToProps = ({ users }) => {
  const userList = Object.keys(users);

  return {
    scoreCard: userList
      .map((user) => {
        const id = user;
        const { name, avatarURL, questions, answers } = users[user];
        const questionScore = questions.length || 0;
        const answerScore = Object.keys(answers).length || 0;
        const total = questionScore + answerScore;
        return { id, name, avatarURL, questionScore, answerScore, total };
      })
      .sort((a, b) => {
        return b.total - a.total;
      }),
  };
};
export default connect(mapStateToProps)(LeaderboardContainer);
