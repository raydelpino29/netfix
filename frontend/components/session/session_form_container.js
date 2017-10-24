import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form'; //create this file
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let loggedIn;
  let formType;
  if (state.currentUser) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  if (ownProps.location.pathname === '/login') {
    formType = 'login';
  } else {
    formType = 'signup';
  }
  return {
    errors: state.errors,
    formType,
    loggedIn,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  if (ownProps.location.pathname === '/login') {
    processForm = login;
  } else {
    processForm = signup;
  }
  return {
    processForm,
  };
};
