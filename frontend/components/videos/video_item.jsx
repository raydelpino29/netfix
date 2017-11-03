import React from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
      this.handleLike = this.handleLike.bind(this);
      this.processCreate = this.processCreate.bind(this);
      this.processDelete = this.processDelete.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
  }

  processDelete (field, currentLike) {
    this.props.deleteLike(currentLike.id);
  }

  processCreate (field) {
    let like_status;
    like_status = field === 'like' ? 1 : 0;
    this.props.createLike({ user_id: this.props.currentUser.id,
      video_id: this.props.video.id, like_status });
  }

  handleAdd (e) {
    if (this.props.myListStatus) {
      let currentListItem;
      Object.values(this.props.myList).forEach((item) => {
        if (item.video_id === this.props.video.id) {
          currentListItem = item;
        }
      });
      this.props.deleteListItem(currentListItem.id);
    } else {
      this.props.createListItem({ user_id: this.props.currentUser.id,
        video_id: this.props.video.id });
    }
  }

  handleLike(field) {
    let other;
    other = field === 'like' ? 'dislike' : 'like';
    if (this.props.likeStatus) { //if there is already a like or dislike, delete it on click
      let currentLike;
      const like = Object.values(this.props.likes).forEach((like) => {
        if (like.video_id === this.props.video.id) {
          currentLike = like;
        }
      });
      return (e) => {
        this.processDelete(field, currentLike);
      };
    } else {
      return (e) => {
        this.processCreate(field);
      };
    }
  }

  render () {
    let classLike;
    let classDislike;
    let classMyList;
    let containerClass = "video-item-container";
    if (this.props.classTitle) {
      containerClass += " video-show";
    }
    if (this.props.likeStatus === "like") {
      classLike = "icon fa fa-thumbs-o-up active-like";
      classDislike = "";
    } else if (this.props.likeStatus === "dislike") {
      classDislike = "icon fa fa-thumbs-o-down active-dislike";
      classLike = "";
    } else {
      classLike = "icon fa fa-thumbs-o-up";
      classDislike = "icon fa fa-thumbs-o-down";
    }
    if (this.props.myListStatus) {
      classMyList = "icon fa fa-plus-circle active-add";
    } else {
      classMyList = "icon fa fa-plus-circle";
    }
    return (
      <li onClick={this.handleVideoClick} className={containerClass}>
        <Link to={`/video/${this.props.video.id}`}><img className="video-item" src={this.props.video.thumbnail_url} /></Link>
        <Link to={`/video/${this.props.video.id}`}><i class="fa fa-play" aria-hidden="true"></i></Link>
        <i onClick={this.handleLike('like')} className={classLike}></i>
        <i onClick={this.handleLike('dislike')} className={classDislike}></i>
        <i onClick={this.handleAdd} className={classMyList}></i>
        <p className="video-title">{this.props.video.title}</p>
        <i  onClick={() => this.props.handleDropdown(this.props.video)} className="fa fa-angle-down" aria-hidden="true"></i>
      </li> //invoke this?
    )
  }
}

export default VideoItem;
