import TitleBar from "./Titlebar";

function Login({ users, selectedUser, onSelectHandler, loginHandler }) {
  return (
    <>
      <div className="background bg-cover bg-no-repeat bg-center fixed h-screen w-screen bg-opacity-0"></div>

      <div
        className="flex justify-center items-center h-screen text-white "
        style={{ position: "relative" }}
      >
        <div className="w-1/4 border-blue-400 border-2  flex flex-col bg-white">
          <TitleBar title="Login" />

          <div className="font-semibold flex prose w-full p-10 justify-between items-center my-4">
            <label>Select User</label>
            <select
              value={selectedUser}
              className="px-10 py-1  rounded-full"
              onChange={onSelectHandler}
            >
              {users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex  w-full p-5 justify-center items-center">
            <button
              className="py-2 px-4 bg-blue-500   w-3/5 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-blue-500 focus:outline-none"
              onClick={loginHandler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
