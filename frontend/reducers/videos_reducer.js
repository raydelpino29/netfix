import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';

const VideoReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_VIDEOS:
    return action.videos;

    case RECEIVE_VIDEO:
    newState = Object.assign({}, state, { [action.video.id]: action.video });
    return newState;

    case RECEIVE_VIDEOS:
    newState = Object.assign({}, state, { search: action.videos });
    return newState;

    default:
      return state;
  }
};

export default VideoReducer;
