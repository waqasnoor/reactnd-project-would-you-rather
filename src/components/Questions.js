import { useState } from "react";
import PollResult from "./PollResult";
import Question from "./Question";
import Tabs from "./Tab";

function Questions({ questions, users, results }) {
  const [currentTab, setCurrentTab] = useState("questions");

  return (
    <div
      className="flex justify-center  py-2 "
      style={{ position: "relative" }}
    >
      <div className=" p-10 w-1/2 flex  flex-col  rounded-xl ">
        <Tabs active={currentTab}>
          <Tabs.Header
            onClick={() => setCurrentTab("questions")}
            isActive={currentTab === "questions"}
          >
            Questions
          </Tabs.Header>
          <Tabs.Header
            onClick={() => setCurrentTab("results")}
            isActive={currentTab === "results"}
          >
            Results
          </Tabs.Header>
          <Tabs.Tab name="questions">
            {!questions.length && <h1> All questions have been answered</h1>}
            {!!questions.length &&
              questions.map((question) => (
                <Question
                  key={question.id}
                  question={question}
                  author={users[question.author]}
                />
              ))}
          </Tabs.Tab>
          <Tabs.Tab name="results">
            {!results.length && <h1> No Result Found</h1>}
            {!!results.length &&
              results.map((question) => (
                <PollResult
                  key={question.id}
                  question={question}
                  author={users[question.author]}
                />
              ))}
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default Questions;
