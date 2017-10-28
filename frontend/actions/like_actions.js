import * as LikesApiUtil from '../util/likes_api';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveAllLikes = (likes) => {
  return {
    type: RECEIVE_ALL_LIKES,
    likes: likes
  };
};

export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like: like
  };
};

export const removeLike = (like) => {
  return {
    type: REMOVE_LIKE,
    like: like
  };
};

export const fetchAllLikes = () => {
  return (dispatch) => {
    return LikesApiUtil.fetchAllLikes().then((likes) => {
      return dispatch(receiveAllLikes(likes));
    });
  };
};

export const createLike = (like) => {
  return (dispatch) => {
    return LikesApiUtil.createLike(like).then((like) => {
      return dispatch(receiveLike(like));
    });
  };
};

export const deleteLike = (id) => {
  return (dispatch) => {
    return LikesApiUtil.deleteLike(id).then((like) => {
      return dispatch(removeLike(like));
    });
  };
};
