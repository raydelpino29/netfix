import { combineReducers } from 'redux';
import VideoReducer from './videos_reducer';
import CategoriesReducer from './categories_reducer';
import LikesReducer from './likes_reducer';
import MyListReducer from './my_list_reducer';

const EntitiesReducer = combineReducers({
  videos: VideoReducer,
  categories: CategoriesReducer,
  likes: LikesReducer,
  myList: MyListReducer,
});

export default EntitiesReducer;
