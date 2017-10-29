import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: { like: false, dislike: false, myList: false }, class: { like: "icon fa fa-thumbs-o-up", dislike: "icon fa fa-thumbs-o-down", myList: "icon fa fa-plus-circle" } };
  }

  handleClick(field) {
    let videos = this.props.likedVideos;
    if (field === 'like') {
      videos = this.props.likedVideos;
    } else {
      videos = this.props.dislikedVideos;
    }
    if (videos.includes(this.props.video.id)) {
      return;
    } else {
      return (e) => {
        this.setState({ [field]: !this.state.field });
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
