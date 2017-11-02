import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, updateReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (review) => dispatch(deleteReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
