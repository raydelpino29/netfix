import { connect } from 'react-redux';
import { fetchAllLikes, createLike, deleteLike } from '../../actions/like_actions';
import { fetchAllListItems, createListItem, deleteListItem } from '../../actions/my_list_actions';
import VideoItem from './video_item';

const mapStateToProps = (state, ownProps) => {
  let numLikes = 0;
  let numDislikes = 0;
  let likedVids = [];
  let dislikedVids = [];
    Object.values(state.entities.likes).forEach((like) => {
      if (like.video_id === ownProps.video.id) {
        if (like.like_type === "like") {
          numLikes += 1;
        } else if (like.like_type === "dislike") {
          numDislikes += 1;
        }
        if (like.user_id === state.session.currentUser.id) {
          if (like.like_type === "like") {
            likedVids.push(like.video_id);
          } else {
            dislikedVids.push(like.video_id);
          }
        }
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
    currentUser: state.session.currentUser,
    likes: Object.values(state.entities.likes),
    myList: Object.values(state.entities.myList),
    myListVids,
    likeStatus,
    myListStatus,
    numLikes,
    numDislikes,
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
