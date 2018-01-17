import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video_actions';
import { fetchAllReviews } from '../../actions/review_actions';
import SearchPage from './search_page';

const mapStateToProps = (state, ownProps) => {
  return {
    searchedVids: Object.values(state.entities.search),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: (query, id) => dispatch(searchVideos(query, id)),
    fetchAllReviews: () => dispatch(fetchAllReviews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
