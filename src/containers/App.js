import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import middleware from "../middleware";
import reducers from "../reducers";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Root from "./Root";
import AuthorizedRoute from "./AuthorizedRoute";
function App() {
  const store = createStore(reducers, middleware);

  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Root}></Route>
        <Route path="/login" component={Login}></Route>
        <AuthorizedRoute path="/dashboard" component={Dashboard} />
      </Router>
    </Provider>
  );
}

export default App;
