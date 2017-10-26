import * as VideosApi from '../util/videos_api';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';

export const receiveAllVideos = (videos) => {
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos,
  };
};

export const fetchAllVideos = () => {
  return (dispatch) => {
    return VideosApi.fetchAllVideos().then((videos) => {
      dispatch(receiveAllVideos());
    });
  };
};
