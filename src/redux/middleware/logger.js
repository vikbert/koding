const logger = (store) => (next) => (action) => {
  let result;
  if (action.type) {
    console.group(action.type);
    console.info('dispatching', action);

    result = next(action);

    console.log('next state', store.getState());
    console.groupEnd();
  }

  return result;
};

export default logger;
