import * as ReviewsApi from '../util/reviews_api';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews: reviews,
  };
};

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review: review,
  };
};

export const removeReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    review: review,
  };
};

export const fetchAllReviews = () => {
  return (dispatch) => {
    return ReviewsApi.fetchAllReviews().then((reviews) => {
      return dispatch(receiveAllReviews(reviews));
    });
  };
};

export const createReview = (review) => {
  return (dispatch) => {
    return ReviewsApi.createReview(review).then((review) => {
      return dispatch(receiveReview(review));
    });
  };
};

export const updateReview = (review) => {
  return (dispatch) => {
    return ReviewsApi.updateReview(review).then((review) => {
      return dispatch(receiveReview(review));
    });
  };
};

export const deleteReview = (id) => {
  return (dispatch) => {
    return ReviewsApi.deleteReview(id).then((review) => {
      return dispatch(removeReview(review));
    });
  };
};
