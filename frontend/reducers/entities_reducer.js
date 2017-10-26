import { combineReducers } from 'redux';
import VideoReducer from './videos_reducer';
import CategoriesReducer from './categories_reducer';

const EntitiesReducer = combineReducers({
  videos: VideoReducer,
  categories: CategoriesReducer,
});

export default EntitiesReducer;
