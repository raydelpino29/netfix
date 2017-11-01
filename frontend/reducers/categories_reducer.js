import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/video_actions';

const CategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return action.categories;

    case RECEIVE_CATEGORY:
      newState = Object.assign({}, state, { [action.category.id]: action.category });
      return newState;

    default:
      return state;
  }
};

export default CategoriesReducer;
