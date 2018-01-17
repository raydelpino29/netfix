import React from 'react';
import { connect } from 'react-redux';
import { fetchCategory, fetchAllVideos } from '../../actions/video_actions';
import { fetchAllListItems } from '../../actions/my_list_actions';
import { fetchAllReviews } from '../../actions/review_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => {
  let catId = ownProps.match.params.categoryId;
  let category;
  if (ownProps.location.pathname === "/myList") {
    category = "myList";
  } else {
    category = state.entities.categories[ownProps.match.params.categoryId];
  }
  let videos;
  if (ownProps.location.pathname === "/myList") {
    videos = Object.values(state.entities.myList).map((item) => {
      return state.entities.videos[item.video_id];
    });
  } else {
    videos = Object.values(state.entities.videos).filter((video) => {
      if (video.category_id === parseInt(catId)) {
        return video;
      }
    });
  }
  return {
    categories: state.entities.categories,
    category,
    videos,
    catId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchAllListItems: () => dispatch(fetchAllListItems()),
    fetchAllReviews: () => dispatch(fetchAllReviews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);
