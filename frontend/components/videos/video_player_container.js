import { connect } from 'react-redux';
import VideoPlayer from './video_player';
import { fetchVideo } from '../../actions/video_actions'

const mapStateToProps = (state, ownProps) => {
  let video = state.entities.videos[ownProps.match.params.videoId];
  return {
    video,
    vidId: ownProps.match.params.videoId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideo: (id) => dispatch(fetchVideo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
