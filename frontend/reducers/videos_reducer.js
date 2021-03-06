import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions';

const VideoReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_VIDEOS:
    return action.videos;

    case RECEIVE_VIDEO:
    newState = Object.assign({}, state, { [action.video.id]: action.video });
    return newState;

    default:
      return state;
  }
};

export default VideoReducer;
