import { useHistory } from "react-router-dom";
import TitleBar from "./Titlebar";

function Question({ question, author }) {
  const history = useHistory();
  const routeToPoll = () => {
    history.push(`/dashboard/question/${question.id}`);
  };
  return (
    <div className="m-4 bg-white">
      <TitleBar title={`${author.name} asks`} />
      <div className="flex  border border-2 border-blue-500">
        <div className="w-48 flex justify-center items-center border-r-2 border-blue-400">
          <img
            className="w-16 rounded-full"
            src={author.avatarURL}
            alt="user_avatar"
          />
        </div>
        <div className="flex-1 p-4">
          <h3 className="prose prose-xl  font-semibold text-blue-500">
            Would You Rather
          </h3>

          <div className="flex flex-col items-center">
            <span>{question.optionOne.text}</span>
            <h3 className="text-blue-500 prose prose-xl  font-semibold">OR</h3>
            <span>{question.optionTwo.text}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1  justify-center ">
        <button
          className="bg-blue-400 text-white p-2 w-full border border-2 border-blue-500 hover:bg-white hover:text-blue-400"
          onClick={routeToPoll}
        >
          Post Answer
        </button>
      </div>
    </div>
  );
}
export default Question;
