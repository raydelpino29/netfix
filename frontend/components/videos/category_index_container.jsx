import { connect } from 'react-redux';
import { fetchAllVideos, fetchAllCategories } from '../../actions/video_actions';
import CategoryIndex from './category_index';

const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.entities.videos),
    categories: Object.values(state.entities.categories)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
