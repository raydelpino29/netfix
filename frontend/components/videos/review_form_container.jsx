import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = "create";
  if (ownProps.review) {
    formType = "edit";
  }
  debugger
  return {
    currentUser: state.session.currentUser,
    review: ownProps.review,
    formType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
