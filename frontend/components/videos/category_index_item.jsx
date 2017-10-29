import React from 'react';
import VideoItem from './video_item';

const CategoryIndexItem = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoItem key={video.id} video={video} likes={props.likes} createLike={props.createLike}
        deleteLike={props.deleteLike}/>
    );
  });

  return (
    <div className="single-category">
      <h1>{props.category.name}</h1>
      <ul className="video-row">
        {videoItems}
      </ul>
    </div>
  );
};

export default CategoryIndexItem;
