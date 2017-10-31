import React from 'react';
import { connect } from 'react-redux';
import { fetchCategory, fetchAllVideos } from '../../actions/video_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => {
  let catId = ownProps.match.params.categoryId;
  let category = state.entities.categories[ownProps.match.params.categoryId];
  let videos = Object.values(state.entities.videos).filter((video) => {
    if (video.category_id === category.id) {
      return video;
    }
  });
  debugger
  return {
    category,
    videos,
    catId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);
