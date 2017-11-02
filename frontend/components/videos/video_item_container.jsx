import { connect } from 'react-redux';
import { fetchAllLikes, createLike, deleteLike } from '../../actions/like_actions';
import { fetchAllListItems, createListItem, deleteListItem } from '../../actions/my_list_actions';
import VideoItem from './video_item';

const mapStateToProps = (state, ownProps) => {
  let likedVids = [];
  let dislikedVids = [];
  Object.values(state.entities.likes).forEach((like) => {
    if (like.like_type === "like") {
      likedVids.push(like.video_id);
    } else {
      dislikedVids.push(like.video_id);
    }
  });
  let likeStatus;
  if (likedVids.includes(ownProps.video.id)) {
    likeStatus = "like";
  } else if (dislikedVids.includes(ownProps.video.id)) {
    likeStatus = "dislike";
  }
  let myListVids = Object.values(state.entities.myList).map((item) => {
    return item.video_id;
  });
  let myListStatus;
  if (myListVids.includes(ownProps.video.id)) {
    myListStatus = "added";
  }
  return {
    videos: Object.values(state.entities.videos),
    currentUser: state.session.currentUser,
    categories: Object.values(state.entities.categories),
    likes: Object.values(state.entities.likes),
    myList: Object.values(state.entities.myList),
    myListVids,
    likeStatus,
    myListStatus,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    createListItem: (item) => dispatch(createListItem(item)),
    deleteListItem: (id) => dispatch(deleteListItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoItem);
