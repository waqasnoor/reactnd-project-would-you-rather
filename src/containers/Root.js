import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../assets/css/style.css";

function Root({ authorized }) {
  if (authorized) return <Redirect to="/dashboard" />;
  return <Redirect to="/login" />;
}
const mapStateToProps = ({ authUser }) => ({ authorized: !!authUser.username });
export default connect(mapStateToProps)(Root);
