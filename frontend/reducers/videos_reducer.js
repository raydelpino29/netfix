import { RECEIVE_ALL_VIDEOS } from '../actions/video_actions';

const VideoReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_VIDEOS:
    return action.videos;

    default:
      return state;
  }
};

export default VideoReducer;
