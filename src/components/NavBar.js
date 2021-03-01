export default function NavBar({ profilePicture, name, onClickHandler }) {
  return (
    <div className="w-screen px-10 py-4 flex justify-between bg-white">
      <div>
        <div className="flex items-center">
          <img
            src={profilePicture}
            width={50}
            height={50}
            className="rounded-full"
            alt={"user profile "}
          />
          <div className="prose prose-lg  mx-2">{name}</div>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <button
          className="px-2 prose prose-lg text-blue-500 hover:text-white hover:bg-blue-400"
          onClick={onClickHandler("question")}
        >
          Questions
        </button>

        <button
          className="px-2 prose prose-lg text-blue-500 hover:text-white hover:bg-blue-400"
          onClick={onClickHandler("leaderboard")}
        >
          Leaderboard
        </button>
        <button
          className="px-2 prose prose-lg text-blue-500 hover:text-white hover:bg-blue-400"
          onClick={onClickHandler("new")}
        >
          New
        </button>

        <button
          className="px-2 prose prose-lg text-red-500 hover:text-white hover:bg-red-400"
          onClick={onClickHandler("logout")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
