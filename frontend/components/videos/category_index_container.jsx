import { connect } from 'react-redux';
import { fetchAllVideos, fetchAllCategories } from '../../actions/video_actions';
import { fetchAllLikes, createLike, deleteLike } from '../../actions/like_actions';
import CategoryIndex from './category_index';

const mapStateToProps = (state) => {
  let likedVideos = [];
  let dislikedVideos = [];
  Object.values(state.entities.likes).map((like) => {
    if (like.like_type === "like") {
      likedVideos.push(like.video_id);
    } else {
      dislikedVideos.push(like.video_id);
    }
  });
  return {
    videos: Object.values(state.entities.videos),
    categories: Object.values(state.entities.categories),
    likedVideos,
    dislikedVideos,
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
