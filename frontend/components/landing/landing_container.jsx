import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import Landing from './landing';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
