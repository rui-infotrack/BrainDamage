export default store => next => action => {
  if (window.reduxTracing) {
    window.console.group(action.type);
    window.console.info('dispatching', action);
    let result = next(action);
    window.console.log('next state', store.getState());
    window.console.groupEnd(action.type);
    return result;
  }
  return next(action);
};
