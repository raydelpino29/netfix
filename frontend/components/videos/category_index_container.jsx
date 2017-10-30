import { connect } from 'react-redux';
import { fetchAllVideos, fetchAllCategories } from '../../actions/video_actions';
import { fetchAllLikes, createLike, deleteLike } from '../../actions/like_actions';
import { fetchAllListItems, createListItem, deleteListItem } from '../../actions/my_list_actions';
import CategoryIndex from './category_index';

const mapStateToProps = (state) => {
  let listItems = Object.values(state.entities.myList).map((item) => {
    return item.video_id;
  });
  return {
    videos: Object.values(state.entities.videos),
    currentUser: state.session.currentUser,
    categories: Object.values(state.entities.categories),
    likes: Object.values(state.entities.likes),
    myList: Object.values(state.entities.myList),
    listItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    fetchAllLikes: () => dispatch(fetchAllLikes()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    fetchAllListItems: () => dispatch(fetchAllListItems()),
    createListItem: (item) => dispatch(createListItem(item)),
    deleteListItem: (id) => dispatch(deleteListItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
