import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_LIKES:
    return action.likes;

    case RECEIVE_LIKE:
    newState = Object.assign({}, state, { [action.like.id]: action.like });
    return newState;

    case REMOVE_LIKE:
    newState = Object.assign({}, state);
    delete newState[action.like.id];
    return newState;

    default:
    return state;
  }
};

export default LikesReducer;
