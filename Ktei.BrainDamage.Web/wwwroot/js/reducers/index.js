import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import wikiIndex from './wikiIndex';
import wikiSave from './wikiSave';

export default combineReducers({
  router: routerStateReducer,
  wikiIndex,
  wikiSave
});
