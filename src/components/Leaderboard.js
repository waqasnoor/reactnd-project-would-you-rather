import ScoreCard from "./ScoreCard";

function Leaderboard({ scoreCard }) {
  return (
    <div
      className="flex justify-center  py-2 "
      style={{ position: "relative" }}
    >
      <div className="  p-10 w-1/2 flex  flex-col  rounded-xl">
        <ul className="gap-4">
          {scoreCard.map((score) => (
            <li key={score.id}>
              <ScoreCard score={score} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Leaderboard;
