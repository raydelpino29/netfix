import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    let likedVids = [];
    let dislikedVids = [];
    Object.values(this.props.likes).map((like) => {
      if (like.like_type === "like") {
        likedVids.push(like.video_id);
      }
    });
    this.state = { value: { like: Boolean(likedVids.includes(this.props.video.id)),
      dislike: Boolean(dislikedVids.includes(this.props.video.id)) },
      class: { like: "icon fa fa-thumbs-o-up", dislike: "icon fa fa-thumbs-o-down",
      myList: "icon fa fa-plus-circle" } };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    if (this.state.value.field) { //if there is already a like or dislike, delete it on click
      like = Object.values(this.props.likes).filter((like) => {
        if (like.video_id === this.props.video.id) {
          return like;
        }
      });
      return (e) => {
        this.setState({ value: { [field]: false } });
        this.props.deleteLike(like.id);
      };
    } else {
      return (e) => {
        let like_status;
        like_status = field === 'like' ? 1 : 0;
        this.setState({ value: { [field]: true } });
        this.props.createLike({ video_id: this.props.video.id, like_status });
        //in this fxn, create a like if the vid is not already liked, and do the same for
        //disliked videos. Also add or remove the class "like-active" if the button
        //is already/not yet clicked. In the css, let this class maintain its active color
      };
    }
  }

  render () {
    return (
      <li className="video-item-container">
        <img className="video-item" src={this.props.video.thumbnail_url} />
        <i onClick={this.handleClick('like')} className={this.state.class.like}></i>
        <i onClick={this.handleClick('dislike')} className={this.state.class.dislike}></i>
        <i onClick={this.handleClick('myList')} className={this.state.class.myList}></i>
      </li>
    )
  }
}

export default VideoItem;
