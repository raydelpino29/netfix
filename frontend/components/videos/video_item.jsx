import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <video className='video-item' src={video.video_url} poster={video.thumbnail_url}></video>
  )
};

export default VideoItem;
