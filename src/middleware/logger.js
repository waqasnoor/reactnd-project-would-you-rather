const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the action is ", action);
  const nextValue = next(action);
  console.log("updatedStore  is ", store.getState());
  console.groupEnd();
  return nextValue;
};
export default logger;
