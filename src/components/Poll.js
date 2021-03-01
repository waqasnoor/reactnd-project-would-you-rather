import { useState } from "react";
import TitleBar from "./Titlebar";

function Poll({ question, author, answerHandler }) {
  const [attempt, setAttempt] = useState({ qid: question.id });
  const onOptionSelected = (e) => {
    setAttempt((attempt) => ({ ...attempt, answer: e.target.value }));
  };
  const onPostAnswer = () => answerHandler(attempt);
  return (
    <div className="flex justify-center py-2 w-full ">
      <div className="m-4 bg-white w-2/3">
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

            <div className="flex flex-col  flex-1" onChange={onOptionSelected}>
              <label className="flex  w-full">
                <span className="w-1/5">
                  <input type="radio" name="option" value="optionOne" />
                </span>
                <span>{question.optionOne.text}</span>
              </label>
              <label className="flex  w-full">
                <span className="w-1/5">
                  <input type="radio" name="option" value="optionTwo" />
                </span>
                <span>{question.optionTwo.text}</span>
              </label>
            </div>
            <div className="flex justify-center my-4 w-full">
              <button
                disabled={!attempt.answer}
                className="bg-blue-400 text-white p-2 w-full border border-2 border-blue-500 hover:bg-white hover:text-blue-400"
                onClick={onPostAnswer}
              >
                Confirm Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Poll;
