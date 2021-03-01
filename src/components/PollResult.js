import { useHistory } from "react-router-dom";
import * as R from "ramda";
import TitleBar from "./Titlebar";

const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="fill-current text-blue-500 h-4"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

function PollResult({ question, author }) {
  const optionOneVotes = R.defaultTo(
    0,
    R.path(["optionOne", "votes", "length"])(question)
  );
  const optionTwoVotes = R.defaultTo(
    0,
    R.path(["optionTwo", "votes", "length"])(question)
  );

  const yourAnswer = author.answers[question.id];

  const total = optionOneVotes + optionTwoVotes;

  return (
    <div className="m-4 bg-white">
      <TitleBar title={`${author.name}`} />
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

          <div className="flex flex-col w-full">
            <div className="p-4 m-4">
              <div className="flex justify-between">
                <span>{question.optionOne.text} </span>
                {yourAnswer === "optionOne" && <Check />}
              </div>
              <div>
                <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-200 absolute"></div>
                  <div
                    className="h-full bg-blue-500 absolute"
                    style={{ width: `${(optionOneVotes / total) * 100}%` }}
                  ></div>
                </div>
                {optionOneVotes}
              </div>
            </div>
            <div className="p-4 m-4">
              <div className="flex justify-between">
                <span>{question.optionTwo.text} </span>
                {yourAnswer === "optionTwo" && <Check />}
              </div>
              <div>
                <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-200 absolute"></div>
                  <div
                    className="h-full bg-blue-500 absolute"
                    style={{ width: `${(optionTwoVotes / total) * 100}%` }}
                  ></div>
                </div>

                {optionTwoVotes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PollResult;
