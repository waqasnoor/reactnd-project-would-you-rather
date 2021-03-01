import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getUsers } from "../actions/users";
import { authenticate } from "../actions/auth";
import Login from "../components/Login";

function LoginContainer({ dispatch, users }) {
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    if (users.length) {
      setSelectedUser(users[0].id);
    }
  }, [users]);

  const loginHandler = () => {
    dispatch(authenticate(selectedUser));
  };
  const onSelectHandler = (e) => {
    const selectedOption = e.target.value;
    setSelectedUser(selectedOption);
  };
  return (
    <Login
      users={users}
      selectedUser={selectedUser}
      onSelectHandler={onSelectHandler}
      loginHandler={loginHandler}
    />
  );
}
const mapStateToProps = ({ users }) => ({
  users: Object.keys(users).length
    ? Object.keys(users).map((user) => users[user])
    : [],
});
export default connect(mapStateToProps)(LoginContainer);
