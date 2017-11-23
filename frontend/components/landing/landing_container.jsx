import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchAllVideos } from '../../actions/video_actions';
import Landing from './landing';

const mapStateToProps = (state) => {
  let landingVideo;
  debugger
  if (state.entities.videos.values) {
    landingVideo = state.entities.videos.values.filter((video) => {
      if (video.title === "Pest Removal") return video;
    });
  }
  return {
    currentUser: state.session.currentUser,
    landingVideo,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
