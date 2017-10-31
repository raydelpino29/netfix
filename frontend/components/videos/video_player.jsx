import React from 'react';
import { Link } from 'react-router-dom';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.vidId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.fetchVideo(newProps.vidId);
    }
  }

  render () {
    if (!this.props.video) {
      return <h1>Loading</h1>
    }
    return (
      <div>
        <button onClick={() => {this.props.history.goBack()} }className="fa fa-chevron-circle-left"></button>
        <video className="playing-video" controls autoPlay src={this.props.video.video_url}></video>
      </div>
    )
  }
}

export default VideoPlayer;
