import { RECEIVE_VIDEOS } from '../actions/video_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {

    case RECEIVE_VIDEOS:
    newState = Object.assign({}, state, { search: action.videos });
    return newState;

    default:
      return state;
  }
};

export default SearchReducer;
