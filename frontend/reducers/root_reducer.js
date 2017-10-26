import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import EntitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: SessionErrorsReducer
});

export default RootReducer;
