import React from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/video_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => {
  let category = Object.values(state.entities.categories).forEach((category) => {
    if (ownProps.match.params.categoryId === category.id) {
      return category;
    }
  });
  let videos = this.props.videos.filter((video) => {
    if (video.category_id === category.id) {
      return video;
    }
  });
  return {
    category,
    videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (id) => dispatch(fetchCategory(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);
