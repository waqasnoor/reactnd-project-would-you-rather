import { Redirect, Route, Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import QuestionPage from "./QuestionContainer";
import LeaderBoardPage from "./LeaderBoard";
import NewQuestionPage from "./NewQuestion";
import PollPage from "./Poll";

import { fetchQuestions } from "../actions/questions";

function Dashboard({ history, dispatch }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    dispatch(fetchQuestions()).then(() => setLoading(false));
  }, []);
  return (
    <>
      <div className="background bg-cover bg-no-repeat bg-center fixed h-screen w-screen bg-opacity-0"></div>
      <div className="flex flex-col h-screen" style={{ position: "relative" }}>
        <NavBar />
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Router history={history}>
            <Switch>
              <Route path="/dashboard/new" component={NewQuestionPage}></Route>
              <Route
                path="/dashboard/leaderboard"
                component={LeaderBoardPage}
              ></Route>
              <Route
                exact
                path="/dashboard/question"
                component={QuestionPage}
              ></Route>
              <Route
                path="/dashboard/question/:id"
                component={PollPage}
              ></Route>
              <Redirect to="/dashboard/question" />
            </Switch>
          </Router>
        )}
      </div>
    </>
  );
}
export default connect()(Dashboard);
