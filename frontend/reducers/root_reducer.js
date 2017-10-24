import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SessionErrorsReducer from './session_errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: SessionErrorsReducer
});

export default RootReducer;
