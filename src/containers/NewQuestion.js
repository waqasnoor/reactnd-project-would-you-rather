import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { newQuestion } from "../actions/questions";
import NewQuestion from "../components/NewQuestion";

function NewQuestionContainer({ dispatch }) {
  const [question, setQuestion] = useState({});
  const history = useHistory();
  const onTextChange = (e) => {
    const { name, value } = e.target;
    setQuestion((question) => ({ ...question, [name]: value }));
  };
  const saveQuestion = async () => {
    try {
      await dispatch(newQuestion(question));

      history.push(`/dashboard/question`);
    } catch (error) {}
  };
  const isDisabled = () => {
    const hasOptionOneText = !!question.optionOneText;
    const hasOptionTwoText = !!question.optionTwoText;
    const isOptionDisabled =
      hasOptionOneText === hasOptionTwoText && hasOptionTwoText !== false;
    return !isOptionDisabled;
  };
  return (
    <NewQuestion
      isDisabled={isDisabled()}
      onTextChange={onTextChange}
      question={question}
      askHandler={saveQuestion}
    />
  );
}
export default connect()(NewQuestionContainer);
