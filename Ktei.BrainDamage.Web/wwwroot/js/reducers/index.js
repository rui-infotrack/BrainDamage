import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import { default as wiki } from './wiki';

export default combineReducers({
  router: routerStateReducer,
  wiki
});
