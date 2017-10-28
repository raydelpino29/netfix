import { combineReducers } from 'redux';
import VideoReducer from './videos_reducer';
import CategoriesReducer from './categories_reducer';
import LikesReducer from './likes_reducer';

const EntitiesReducer = combineReducers({
  videos: VideoReducer,
  categories: CategoriesReducer,
  likes: LikesReducer
});

export default EntitiesReducer;
