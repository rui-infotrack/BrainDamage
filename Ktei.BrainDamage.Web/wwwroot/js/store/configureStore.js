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
import callAPI from './callAPI';
import logger from './logger';

export default () => {
  let createStoreWithMiddleware;

  createStoreWithMiddleware = compose(
    applyMiddleware(thunk, callAPI),
    reduxReactRouter({ routes, createHistory }),
    applyMiddleware(logger)
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

