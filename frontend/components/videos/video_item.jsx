import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    let likedVids = [];
    let dislikedVids = [];
    Object.values(this.props.likes).map((like) => {
      if (like.like_type === "like") {
        likedVids.push(like.video_id);
      } else {
        dislikedVids.push(like.video_id);
      }
    });
    let classLike;
    let classDislike;
    let classMyList;
    if (likedVids.includes(this.props.video.id)) {
      classLike = "icon fa fa-thumbs-o-up active-like";
      classDislike = "";
    } else if (dislikedVids.includes(this.props.video.id)) {
      classDislike = "icon fa fa-thumbs-o-down active-dislike";
      classLike = "";
    } else {
      classLike = "icon fa fa-thumbs-o-up";
      classDislike = "icon fa fa-thumbs-o-down";
    }
    if (this.props.listItems.includes(this.props.video.id)) {
      classMyList = "icon fa fa-plus-circle active-add";
    } else {
      classMyList = "icon fa fa-plus-circle";
    }
    //make these classes to dynamically set the class state and
    //give proper classes to buttons depending on their like status
    this.state = { value: { like: Boolean(likedVids.includes(this.props.video.id)),
      dislike: Boolean(dislikedVids.includes(this.props.video.id)),
      myList: Boolean(this.props.listItems.includes(this.props.video.id)) },
      class: { like: classLike, dislike: classDislike,
      myList: classMyList } };
      this.handleLike = this.handleLike.bind(this);
      this.processCreate = this.processCreate.bind(this);
      this.processDelete = this.processDelete.bind(this);
      this.handleAdd = this.handleAdd.bind(this);

  }

  componentWillReceiveProps (newProps) { // todo: refactor
    if (Object.keys(this.props.likes).length !== Object.keys(newProps.likes).length) {
      let likedVids = [];
      let dislikedVids = [];
      Object.values(newProps.likes).map((like) => {
        if (like.like_type === "like") {
          likedVids.push(like.video_id);
        } else {
          dislikedVids.push(like.video_id);
        }
      });
      let classLike;
      let classDislike;
      let classMyList;
      if (likedVids.includes(this.props.video.id)) {
        classLike = "icon fa fa-thumbs-o-up active-like";
        classDislike = "";
        this.setState({ class: { like: classLike, dislike: classDislike, myList: this.state.class.myList } });
      } else if (dislikedVids.includes(this.props.video.id)) {
        classDislike = "icon fa fa-thumbs-o-down active-dislike";
        classLike = "";
        this.setState({ class: { like: classLike, dislike: classDislike, myList: this.state.class.myList } });
      } else {
        classLike = "icon fa fa-thumbs-o-up";
        classDislike = "icon fa fa-thumbs-o-down";
        this.setState({ class: { like: classLike, dislike: classDislike, myList: this.state.class.myList } });
      }
    }
  }

  processDelete (field, like) {
    this.setState({ value: { [field]: false } });
    this.props.deleteLike(like[0].id);
  }

  processCreate (field) {
    let like_status;
    like_status = field === 'like' ? 1 : 0;
    this.setState({ value: { [field]: true } });
    this.props.createLike({ user_id: this.props.currentUser.id,
      video_id: this.props.video.id, like_status });
  }

  handleAdd (e) {
    if (this.state.value.myList) {

    }
  }

  handleLike(field) {
    let other;
    other = field === 'like' ? 'dislike' : 'like';
    if (this.state.value[field]) { //if there is already a like or dislike, delete it on click
      const like = Object.values(this.props.likes).filter((like) => {
        if (like.video_id === this.props.video.id) {
          return like;
        }
      });
      return (e) => {
        this.state.class.like = "icon fa fa-thumbs-o-up";
        this.state.class.dislike = "icon fa fa-thumbs-o-down";
        this.processDelete(field, like);
      };
    } else {
      return (e) => {
        this.state.class[field] += ` active-${field}`;
        this.state.class[other] = "";
        this.processCreate(field);
      };
    }
  }

  render () {
    return (
      <li className="video-item-container">
        <img className="video-item" src={this.props.video.thumbnail_url} />
        <i onClick={this.handleLike('like')} className={this.state.class.like}></i>
        <i onClick={this.handleLike('dislike')} className={this.state.class.dislike}></i>
        <i onClick={this.handleAdd} className={this.state.class.myList}></i>
      </li>
    )
  }
}

export default VideoItem;
