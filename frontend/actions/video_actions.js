import * as VideosApi from '../util/videos_api';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const receiveAllVideos = (videos) => {
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos,
  };
};

export const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories,
  };
};

export const fetchAllVideos = () => {
  return (dispatch) => {
    return VideosApi.fetchAllVideos().then((videos) => {
      dispatch(receiveAllVideos(videos));
    });
  };
};

export const fetchAllCategories = () => {
  return (dispatch) => {
    return VideosApi.fetchAllCategories().then((categories) => {
      dispatch(receiveAllCategories(categories));
    });
  };
};
