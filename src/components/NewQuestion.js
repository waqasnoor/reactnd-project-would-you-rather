import TitleBar from "./Titlebar";

function NewQuestion({ isDisabled, onTextChange, question, askHandler }) {
  return (
    <div className="flex justify-center py-2" style={{ position: "relative" }}>
      <div className="p-10 w-1/2 flex flex-col bg-3 ">
        <div>
          <TitleBar title="What do you want to know ?" />
          <div className="border border-dark px-2 py-2  bg-white">
            <h3>Would You Rather</h3>

            <div className="flex justify-center my-4">
              <input
                className="mx-4 py-2 px-4 rounded-lg shadow-md hover:border-blue-500 focus:outline-none  w-full"
                type="text"
                name="optionOneText"
                value={question.optionOneText}
                onChange={onTextChange}
              />
            </div>

            <div className="flex justify-center my-4">
              <h3> OR </h3>
            </div>

            <div className="flex justify-center my-4 ">
              <input
                className="mx-4 py-2 px-4 rounded-lg shadow-md hover:border-blue-500 focus:border-blue-500 focus:outline-none w-full"
                type="text"
                name="optionTwoText"
                value={question.optionTwoText}
                onChange={onTextChange}
              />
            </div>
            <div className="flex justify-end my-4 mx-4 ">
              <button
                className="py-2 px-4 bg-blue-500 w-full text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-blue-500 focus:outline-none"
                onClick={askHandler}
                disabled={isDisabled}
              >
                Ask Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewQuestion;
