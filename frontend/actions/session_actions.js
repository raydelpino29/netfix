import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then((user) => {
      return dispatch(receiveCurrentUser(user));
    },
    (errors) => {
      return dispatch(receiveErrors(errors));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then(() => {
      return dispatch(receiveCurrentUser(null));
    },
    (errors) => {
      return dispatch(receiveErrors(errors));
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then(
      (user) => {
        return dispatch(receiveCurrentUser(user));
      },
      (errors) => {
        return dispatch(receiveErrors(errors));
      }
    );
  };
};
