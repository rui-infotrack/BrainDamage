import createAction from 'utils/createAction';
import {
  WIKI_LOAD_REQUEST,
  WIKI_LOAD_SUCCESS,
  WIKI_LOAD_FAILURE,
  WIKI_SELECT_FILTER
} from 'constants/ActionTypes';

export function loadWiki() {
  return {
    types: [WIKI_LOAD_REQUEST, WIKI_LOAD_SUCCESS, WIKI_LOAD_FAILURE],
    callAPI: () => $.getJSON('/api/wiki')
  };
};

export const selectFilter = createAction(WIKI_SELECT_FILTER, 'labelId');
