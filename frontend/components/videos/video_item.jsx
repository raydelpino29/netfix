import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="video-fxns">
      <button className="like">Like</button>
      <button className="dislike">Dislike</button>
      <button className="add">Add</button>
      <video className='video-item' src={video.video_url} poster={video.thumbnail_url}></video>
      <div>
      </div>
    </div>
  )
};

export default VideoItem;
