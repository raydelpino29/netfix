import { connect } from 'react-redux';
import { fetchAllVideos, fetchAllCategories } from '../../actions/video_actions';
import { fetchAllLikes, createLike, deleteLike } from '../../actions/like_actions';
import CategoryIndex from './category_index';

const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.entities.videos),
    currentUser: state.session.currentUser, 
    categories: Object.values(state.entities.categories),
    likes: Object.values(state.entities.likes),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    fetchAllLikes: () => dispatch(fetchAllLikes()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
