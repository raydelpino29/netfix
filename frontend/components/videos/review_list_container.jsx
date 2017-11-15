import React from 'react';
import { connect } from 'react-redux';
import ReviewList from './review_list';
import { updateReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const vidReviews = Object.values(state.entities.reviews).filter((review) => {
    if (review.video_id === ownProps.videoId) {
      return review;
    }
  });
  return {
    reviews: vidReviews,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
