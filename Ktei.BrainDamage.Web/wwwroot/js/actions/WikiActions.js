import createAction from 'utils/createAction';
import { WIKI_SELECT_FILTER } from 'constants/ActionTypes';

export const selectFilter = createAction(WIKI_SELECT_FILTER, 'labelId');
