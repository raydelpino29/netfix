import { RECEIVE_ALL_CATEGORIES } from '../actions/video_actions';

const CategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

export default CategoriesReducer;
