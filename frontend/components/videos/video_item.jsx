import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li className='video-item-container'>
        <img className='video-item' src={this.props.video.thumbnail_url} />
        <i className="icon fa fa-thumbs-o-up"></i>
        <i className="icon fa fa-thumbs-o-down"></i>
      </li>
    )
  }
}

export default VideoItem;
