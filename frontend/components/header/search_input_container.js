import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video_actions';
import SearchInput from './search_input';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
