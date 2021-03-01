import { connect } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import "../assets/css/style.css";

function AuthorizedRoute({ authorized, component: Component, ...rest }) {
  const location = useLocation();

  if (authorized) {
    const redirected = location.search.split("redirectTo=")[1];

    return redirected ? (
      <Redirect to={redirected} />
    ) : (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...rest} {...props} />;
        }}
      />
    );
  }
  let redirectTo = "";
  if (location.pathname !== "/" && location.pathname !== "/login") {
    redirectTo = `?redirectTo=${location.pathname}`;
  } else if (location.search) {
    redirectTo = location.search;
  }
  return <Redirect to={{ pathname: "/login", search: redirectTo }} />;
}

const mapStateToProps = ({ authUser }) => ({ authorized: !!authUser.username });
export default connect(mapStateToProps)(AuthorizedRoute);
