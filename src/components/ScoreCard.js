function ScoreCard({ score }) {
  return (
    <div className="flex flex-col m-4">
      <div className="text-white bg-blue-500 p-2 rounded border-2 border-blue-500">
        {score.name}
      </div>

      <div className="bg-white grid grid-cols-4 divide-x-2 divide-blue-400  gap-4">
        <div className="m-2 p-2">
          <img src={score.avatarURL} className="w-16 rounded-full" />
        </div>
        <div className="col-span-2 m-2 p-2">
          <div className="flex justify-center font-bold ">{score.name}</div>
          <div className="flex justify-around border-y-1">
            <span>Question</span> <span>{score.questionScore}</span>
          </div>
          <div className="flex justify-around divid-y">
            <span>Answers</span>
            <span>{score.answerScore}</span>
          </div>
        </div>
        <div className="m-2 p-2 flex justify-around items-center flex-col">
          <div className="flex h-8 w-full flex justify-center items-center  font-bold">
            Score
          </div>
          <div className="rounded-full flex justify-center items-center  bg-blue-400  text-white h-8 w-8">
            {score.total}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ScoreCard;
