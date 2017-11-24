import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchAllVideos } from '../../actions/video_actions';
import { createListItem, deleteListItem, fetchAllListItems } from '../../actions/my_list_actions';
import Landing from './landing';

const mapStateToProps = (state) => {
  let landingVideo;
  if (state.entities.videos) {
    landingVideo = Object.values(state.entities.videos).filter((video) => {
      if (video.title === "Pest Removal") return video;
    })[0];
  }
  let myListStatus = "not added";
  let myListVid = Object.values(state.entities.myList).filter((item) => {
    if (landingVideo && item.video_id === landingVideo.id) {
      myListStatus = "added";
      return item;
    }
  })[0];
  return {
    currentUser: state.session.currentUser,
    landingVideo,
    myListStatus,
    myListVid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    createListItem: (item) => dispatch(createListItem(item)),
    deleteListItem: (id) => dispatch(deleteListItem(id)),
    fetchAllListItems: () => dispatch(fetchAllListItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
