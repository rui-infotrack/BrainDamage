import createReducer from 'utils/createReducer';
import { WIKI_SELECT_FILTER } from 'constants/ActionTypes';

const defaultState = {
  activeLabelId: -1,
  labels: [{ id: -1, text: 'All' }, { id: 1, text: 'Some' }, { id: 2, text: 'Overall' }],
  items: [{
    id: 1,
    title: 'Fallout is coming out!',
    content: 'this is content',
    updatedAt: '5 minutes ago',
    labels: [1]
  }, {
    id: 2,
    title: 'InfoTrack is winning!',
    content: '```public class```',
    updatedAt: '2 days ago',
    labels: []
  }, {
    id: 3,
    title: 'Fargo is fantastic!',
    content: 'this is content',
    updatedAt: '1 day ago',
    labels: [2]
  }]
};

export default createReducer(defaultState, {
  [WIKI_SELECT_FILTER](state, action) {
    const { labelId } = action;

    return Object.assign({}, state, {
      activeLabelId: labelId
    });
  }
});
