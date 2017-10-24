import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const SessionReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state, { currentUser: action.user });
      return newState;

    default:
      return state;
  }
};

export default SessionReducer;
