import * as VideosApi from '../util/videos_api';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveAllVideos = (videos) => {
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos,
  };
};

export const receiveVideos = (videos) => {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
};

export const receiveVideo = (video) => {
  return {
    type: RECEIVE_VIDEO,
    video,
  };
};

export const receiveCategory = (category) => {
  return {
    type: RECEIVE_CATEGORY,
    category,
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

export const fetchVideo = (id) => {
  return (dispatch) => {
    return VideosApi.fetchVideo(id).then((video) => {
      dispatch(receiveVideo(video));
    });
  };
};

export const searchVideos = (query, id) => {
  return (dispatch) => {
    return VideosApi.searchVideos(query, id).then((videos) => {
      dispatch(receiveVideos(videos));
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

export const fetchCategory = (id) => {
  return (dispatch) => {
    return VideosApi.fetchCategory(id).then((category) => {
      dispatch(receiveCategory(category));
    });
  };
};
