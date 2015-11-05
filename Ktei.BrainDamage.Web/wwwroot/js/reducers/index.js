import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import wikiIndex from './wikiIndex';
import wikiCreate from './wikiCreate';

export default combineReducers({
  router: routerStateReducer,
  wikiIndex,
  wikiCreate
});
