import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video_actions';
import SearchPage from './search_page';

const mapStateToProps = (state, ownProps) => {
  return {
    searchedVids: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
