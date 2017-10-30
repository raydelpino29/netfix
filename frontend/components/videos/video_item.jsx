import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    let classLike;
    let classDislike;
    let classMyList;
    if (this.props.likedVids.includes(this.props.video.id)) {
      classLike = "icon fa fa-thumbs-o-up active-like";
      classDislike = "";
    } else if (this.props.dislikedVids.includes(this.props.video.id)) {
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
    this.state = { value: { like: Boolean(this.props.likedVids.includes(this.props.video.id)),
      dislike: Boolean(this.props.dislikedVids.includes(this.props.video.id)),
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
      let classLike;
      let classDislike;
      let classMyList;
      if (newProps.likedVids.includes(this.props.video.id)) {
        classLike = "icon fa fa-thumbs-o-up active-like";
        classDislike = "";
        this.setState({ class: { like: classLike, dislike: classDislike, myList: this.state.class.myList } });
      } else if (newProps.dislikedVids.includes(this.props.video.id)) {
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

  processDelete (field, currentLike) {
    this.props.deleteLike(currentLike.id);
    this.setState({ value: { [field]: false } });
  }

  processCreate (field) {
    let like_status;
    like_status = field === 'like' ? 1 : 0;
    this.props.createLike({ user_id: this.props.currentUser.id,
      video_id: this.props.video.id, like_status });
    this.setState({ value: { [field]: true } });
  }

  handleAdd (e) {
    if (this.state.value.myList) {

    }
  }

  handleLike(field) {
    let other;
    other = field === 'like' ? 'dislike' : 'like';
    if (this.state.value[field]) { //if there is already a like or dislike, delete it on click
      let currentLike;
      const like = Object.values(this.props.likes).forEach((like) => {
        if (like.video_id === this.props.video.id) {
          currentLike = like;
        }
      });
      return (e) => {
        this.state.class.like = "icon fa fa-thumbs-o-up";
        this.state.class.dislike = "icon fa fa-thumbs-o-down";
        this.processDelete(field, currentLike);
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
