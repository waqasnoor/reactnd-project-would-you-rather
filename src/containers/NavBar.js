import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../actions/auth";
import NavBar from "../components/NavBar";
function NavBarContainer({ user, dispatch }) {
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const history = useHistory();
  const redirectTo = (page) => {
    history.push(`/dashboard/${page}`);
  };
  const handleNavElementClick = (item) => () => {
    if (item === "logout") return handleLogout();
    return redirectTo(item);
  };
  return (
    <NavBar
      profilePicture={user.avatarURL}
      name={user.name}
      onClickHandler={handleNavElementClick}
    />
  );
}

function getUser(userId, users) {
  const user = users[userId];
  return user;
}
const mapStateToProps = ({ authUser, users }) => ({
  user: getUser(authUser.username, users),
});
export default connect(mapStateToProps)(NavBarContainer);
