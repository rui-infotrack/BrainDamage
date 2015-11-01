import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import routes from '../routes';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

const logger = store => next => action => {
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

export default () => {
  let createStoreWithMiddleware;

  const middleware = applyMiddleware(thunk, logger);

  createStoreWithMiddleware = compose(
    middleware,
    reduxReactRouter({ routes, createHistory })
  );

  const store = createStoreWithMiddleware(createStore)(
    rootReducer
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

